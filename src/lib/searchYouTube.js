var searchYouTube = (options, callback) => {
  server: 'https://www.googleapis.com/youtube/v3/search',

  // readAll: function(successCB, errorCB = null) { ***pomander don't like this line***
  $.ajax({
    url: searchYouTube.server,
    type: 'GET',
    success: successCB,
    error: errorCB || function (error) {
      console.error('Mini U-tube failed. :sad reacts only:');
    }
  });
  // } ***pomander don't like this line***
};

export default searchYouTube;
//TESTTESTTEST
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2VhcmNoWW91VHViZS5qcyJdLCJuYW1lcyI6WyJzZWFyY2hZb3VUdWJlIiwib3B0aW9ucyIsImNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxnQkFBZ0IsQ0FBQ0MsT0FBRCxFQUFVQyxRQUFWLEtBQXVCO0FBQ3pDO0FBQ0QsQ0FGRDs7QUFJQSxlQUFlRixhQUFmIiwiZmlsZSI6InNlYXJjaFlvdVR1YmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc2VhcmNoWW91VHViZSA9IChvcHRpb25zLCBjYWxsYmFjaykgPT4ge1xuICAvLyBUT0RPXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hZb3VUdWJlO1xuIl19