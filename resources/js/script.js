const moods = {
  happy:'Iam happy',
  sad: 'Im sad'
}

const MoodContext = createContext(moods);

function App(props){
    return(
      <MoodContext.Provider value={moods.happy}>
          <MoodEmoji/>
      </MoodContext.Provider>
    );  
}

function MoodEmoji(){
  return (
    <MoodContext.Consumer value={moods.happy}>
      {({mood}) =><p>{mood}</p>}
    </MoodContext.Consumer>
  );
}