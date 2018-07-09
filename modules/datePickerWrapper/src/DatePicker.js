import React from 'react';
import Pikaday from 'pikaday';

class DatePicker extends React.Component {

    componentDidMount() {
        const el = this.el;
        const { onSelect } = this.props;
        this.picker = new Pikaday({
            field: el,
            onSelect
        });
    }

    componentWillUnmount() {
        this.picker.destroy();
    }

    render() {
        return (
            <input
                ref={ input => {
                    this.el = input;
                }}
            />
        );
    }
}

export default DatePicker;