export const addQuote = (quote) => {
  return {
    type: "ADD_QUOTE",
    //payload
    quote: { ...quote, votes: 0 },
  };
};

export const removeQuote = (quoteId) => {
  return {
    type: "REMOVE_QUOTE",
    // payload for all deletes need an ID
    quoteId,
  };
};

export const upvoteQuote = (quoteId) => {
  return {
    type: "UPVOTE_QUOTE",
    quoteId,
  };
};

export const downvoteQuote = (quoteId) => {
  return {
    type: "DOWNVOTE_QUOTE",
    // ID when changing an individual item
    quoteId,
  };
};
