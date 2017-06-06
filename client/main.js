import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

const players = [{
    _id: 1,
    name: 'Mike',
    score: 3,
}, {
    _id: 2,
    name: 'Lora',
    score: 12
}, {
    _id: 3,
    name: 'Jhon',
    score: 123
}];

const renderPlayers = () => {
    return players.map(e => <p key={e._id}> {e.name} has {e.score} point(s).</p>);

}

        // {players.map(e=> <p key={e._id}> {e.name} </p>)}
Meteor.startup(() => {
    const title = 'Score Keep'
    const name = 'Mike';
    const jsx = (
        <div>
            <h1> {title} </h1>
            <p> Hello, {name} from main.js</p>
{renderPlayers()}
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
});