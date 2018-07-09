import React from 'react';
import countWords from './countWords';
import Editor from './Editor';
import Counter from './Counter';
import ProgressBar from './ProgressBar';
import SaveManager from './SaveManager';
import makeFakeRequest from './makeFakeRequest';

class WordCounter extends React.Component {

    constructor() {
        super();
        this.state = { text: '' };
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(currentText) {
        this.setState(() => ({ text: currentText }));
    }

    render() {
        const {targetWordCount} = this.props;
        const {text} = this.state;

        const wordCount = countWords(text);
        const progress = wordCount / targetWordCount;
        return (
            <form className="measure pa4 sans-serif">
                <Editor
                    onTextChange={this.handleTextChange}
                    text={text}
                />
                <Counter count={wordCount}/>
                <ProgressBar completion={progress}/>
                <SaveManager saveFunction={makeFakeRequest} data={this.state} />
            </form>
        );
    }
}

export default WordCounter;