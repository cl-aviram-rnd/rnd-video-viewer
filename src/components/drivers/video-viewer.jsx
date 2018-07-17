// Copyright (c) 2017 PlanGrid, Inc.

import React, { Component } from 'react';

import 'styles/video.scss';
import Loading from '../loading';

class VideoViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  onCanPlay() {
    this.setState({ loading: false });
  }

  renderLoading() {
    if (this.state.loading) {
      return <Loading />;
    }
    return null;
  }

  render() {
    return (
      <div className="pg-driver-view">
        <div className="video-container">
          {this.renderLoading()}
          <video
            tabIndex="-1"
            className="video-stream html5-main-video"
            playsInline
            controlsList="nodownload"
            style={{ width: '720px', height: '405px' }}
            src="blob:https://www.youtube.com/ac2512f4-d08b-40b1-ab71-b480acfa8cbe"
          >
              Video not supported
          </video>
        </div>
      </div>
    );
  }
}

export default VideoViewer;
