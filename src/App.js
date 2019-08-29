import React, { Component } from 'react';
import Header from './components/header/index'
import './App.scss'
import HeadLine from './components/headline/index'
import ListItem from './components/listItem/index'
import SharedButton from './components/sharedButton/index'
import { fetchPosts } from './actions/index'
import { connect } from 'react-redux'


const initialState = {
  hideBtn:false
};
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      ...initialState
    }
  }
  fetch = ()=> {
    this.props.fetchPosts();
    this.exampleMethod_updatesState();
  }
  exampleMethod_updatesState = () => {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn : !hideBtn
    });
  }

  render(){
    const { posts } = this.props;
    const { hideBtn } = this.state;

    const configButton = {
      buttonText:'Get posts',
      emitEvent:this.fetch
    }

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <HeadLine header="Posts" desc="click the button to render posts!" />

          {!hideBtn && 
            <SharedButton {...configButton} />
          }

          {posts.length > 0 && 
          <div>
            {posts.map((post,index)=>{
              const { title, body } = post;
              const configListItem = {
                title,
                desc:body
              };
              return(
                <ListItem key={index} {...configListItem} />
              )
            })}
          </div>}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts:state.posts
  }
}

export default connect(mapStateToProps,{fetchPosts})(App);
 