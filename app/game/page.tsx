"use client";

import { useState } from 'react';

const initialCircles = [
    { id: 1, color: 'red', sorted: false },
    { id: 2, color: 'blue', sorted: false },
    { id: 3, color: 'blue', sorted: false },
    { id: 4, color: 'red', sorted: false },
];


export default function Game() {
    const [circles, setCircles] = useState(initialCircles);

    const handleCircleClick = (circleId) => {
        setTimeout(() => {
            // Update the state to mark the circle as sorted
        }, 1000); // Delay of 1 second
    };

    return (
        <div className="flex flex-col h-screen bg-gray-900">
            <div className="mb-4 text-center">
                <h1 className="text-4xl font-bold">Color Sorting Game</h1>
                <p className="text-lg">Welcome to the game. Sort the circles by color.</p>
            </div>
            <div className="flex-grow overflow-auto flex justify-center">
                <div className="circles-container flex flex-wrap justify-center">
                    {circles.map(circle => (
                        <div
                            key={circle.id}
                            className="w-12 h-12 rounded-full m-2"
                            style={{ backgroundColor: circle.color }}
                            onClick={() => handleCircleClick(circle.id)}
                        />
                    ))}
                </div>
            </div>
            <div className="py-4">
                <div className="buckets-container flex justify-center gap-4">
                    <div className="bucket bg-blue-400 border border-blue-500 rounded-lg p-4 w-48 h-48 flex flex-wrap justify-center items-center">
                        {/* Bucket 1 - for a blue color */}
                    </div>
                    <div className="bucket bg-red-400 border border-red-500 rounded-lg p-4 w-48 h-48 flex flex-wrap justify-center items-center">
                        {/* Bucket 2 - for red color */}
                    </div>
                </div>
            </div>
        </div>
    );
}