import React from "react";
import { TweenLite, Power1 } from "gsap";

import styles from "./smoothScroll.module.scss";

class SmoothScroll extends React.Component {
  state = {
    height: window.innerHeight,
  };

  viewportRef = React.createRef();

  ro = new ResizeObserver((elements) => {
    for (let elem of elements) {
      const crx = elem.contentRect;
      this.setState({
        height: crx.height,
      });
    }
  });

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    this.ro.observe(this.viewportRef.current);
  }

  componentWillUnmount() {
    this.ro.unobserve(this.viewportRef.current);
  }

  onScroll = () => {
    if (this.viewportRef.current) {
      TweenLite.to(this.viewportRef.current, 1, {
        y: -window.pageYOffset,
        ease: Power1.easeOut,
      });
    }
  };

  render() {
    return (
      <>
        <div className={styles.viewport} ref={this.viewportRef}>
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
