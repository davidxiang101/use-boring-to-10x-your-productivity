"use client";

import { useState } from 'react';

function generateInitialCircles(countPerColor) {
    let circles = [];
    for (let i = 0; i < countPerColor; i++) {
        circles.push({ id: i * 2 + 1, color: 'red', sorted: false });
        circles.push({ id: i * 2 + 2, color: 'blue', sorted: false });
    }
    return circles;
}

const initialCircles = generateInitialCircles(3);

export default function Game() {
    const [circles, setCircles] = useState(initialCircles);

    const handleDragStart = (e, circle) => {
        e.dataTransfer.setData('circleId', circle.id);
    };

    const handleDrop = (e, bucketColor) => {
        e.preventDefault();
        const circleId = e.dataTransfer.getData('circleId');
        setCircles(prevCircles => prevCircles.map(circle => {
            if (circle.id === parseInt(circleId) && circle.color === bucketColor) {
                return { ...circle, sorted: true };
            }
            return circle;
        }));
    };

    return (
        <div className="flex flex-col h-screen bg-gray-900">
            <div className="my-12 text-center">
                <h1 className="text-4xl font-bold">Color Sorting Game</h1>
                <p className="text-lg">Welcome to the game. Sort the circles by dragging them to the right bucket.</p>
            </div>
            <div className="flex-grow overflow-auto flex justify-center">
                <div className="circles-container flex flex-wrap justify-center">
                    {circles.filter(circle => !circle.sorted).map(circle => (
                        <div
                            key={circle.id}
                            className="w-12 h-12 rounded-full m-2 cursor-pointer"
                            style={{ backgroundColor: circle.color }}
                            draggable="true"
                            onDragStart={(e) => handleDragStart(e, circle)}
                        />
                    ))}
                </div>
            </div>
            <div className="py-4">
                <div className="buckets-container flex justify-center gap-4">
                    <div
                        className="bucket bg-blue-400 border border-blue-500 rounded-lg p-4 w-48 h-48 flex flex-wrap justify-center items-center"
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => handleDrop(e, 'blue')}
                    >
                        {/* Bucket 1 - for blue color */}
                        {circles.filter(circle => circle.sorted && circle.color === 'blue').map(circle => (
                            <div
                                key={circle.id}
                                className="w-12 h-12 rounded-full m-2"
                                style={{ backgroundColor: circle.color }}
                            />
                        ))}
                    </div>
                    <div
                        className="bucket bg-red-400 border border-red-500 rounded-lg p-4 w-48 h-48 flex flex-wrap justify-center items-center"
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => handleDrop(e, 'red')}
                    >
                        {/* Bucket 2 - for red color */}
                        {circles.filter(circle => circle.sorted && circle.color === 'red').map(circle => (
                            <div
                                key={circle.id}
                                className="w-12 h-12 rounded-full m-2"
                                style={{ backgroundColor: circle.color }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
