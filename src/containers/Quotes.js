import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { removeQuote, upvoteQuote, downvoteQuote } from "../actions/quotes";

class Quotes extends Component {
  renderQuoteCards = () => {
    return this.props.quotes.map((quote) => {
      return (
        <QuoteCard
          key={quote.id}
          quote={quote}
          delete={this.props.removeQuote}
          upvote={this.props.upvoteQuote}
          downvote={this.props.downvoteQuote}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
          {this.renderQuoteCards()}
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { quotes: state.quotes };
};
export default connect(mapStateToProps, {
  removeQuote,
  upvoteQuote,
  downvoteQuote,
})(Quotes);
