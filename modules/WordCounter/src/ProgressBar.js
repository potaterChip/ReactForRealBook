import React from 'react';

function ProgressBar({ completion }) {
    const percentage = completion * 100;
    return (
        <div className="flex flex-column mv2">
            <label htmlFor="progress" className="mv2">
                Progress
            </label>
            <progress value={completion} id="progress" className="bn">
                {percentage}%
            </progress>
        </div>
    );
}

export default ProgressBar;