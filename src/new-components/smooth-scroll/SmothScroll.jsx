import React from "react";
import { TweenLite, Power1 } from "gsap";

import styles from "./smoothScroll.module.scss";

class SmoothScroll extends React.Component {
  state = {
    height: window.innerHeight,
  };

  ro = new ResizeObserver((elements) => {
    for (let elem of elements) {
      const crx = elem.contentRect;
      this.setState({
        height: crx.height,
      });
    }
  });

  componentDidMount() {
    console.log(this.state.height);
    window.addEventListener("scroll", this.onScroll);
    this.ro.observe(this.viewport);
  }

  componentWillUnmount() {
    this.ro.unobserve(this.viewport);
  }

  onScroll = () => {
    TweenLite.to(this.viewport, 1, {
      y: -window.pageYOffset,
      ease: Power1.easeOut,
    });
  };

  render() {
    return (
      <>
        <div className={styles.viewport} ref={(ref) => (this.viewport = ref)}>
          {this.props.children}
        </div>
        <div
          ref={(ref) => (this.fake = ref)}
          style={{
            height: this.state.height,
          }}
        />
      </>
    );
  }
}

export default SmoothScroll;
