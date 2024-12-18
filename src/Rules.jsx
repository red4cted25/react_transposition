import { useState } from 'react'
import { GoHome } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import rulesStyles from './Rules.css';

const Rules = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    const rules = [
        {
            title: "Objective",
            content: "Complete three puzzles in each difficulty level. Solve the transposition cipher by arranging letters in the correct order using the provided key."
        },
        {
            title: "How to Play",
            content: "Optionally fill in the grid using the ciphertext and key provided. The key tells you the order to read the columns. Enter your solution in the guess box below."
        },
        {
            title: "Time Limit",
            content: "Each puzzle has a timer. Try to solve the puzzle as quickly as possible to achieve the best score."
        },
        {
            title: "Progression",
            content: "Start with Easy (3x3), then progress to Medium (4x4), Hard (5x5), and finally Impossible (6x6) levels."
        }
    ];

    return (
        <>
            <div className="back">
                <h1><Link to={'/'}><GoHome /></Link></h1>
            </div>
            {/* Struggling with classes overriding again, be more specific here and don't use import rulesStyles */}
            <h1 className={rulesStyles.title}>STORY</h1>
            <hr />
            {/* <p className="story">
                <span>Deep within the heart of the abandoned mining town of Cragmoor lies a long-forgotten secret—an encrypted journal belonging to the legendary miner and cryptologist, Magnus Flint. Legends say that Magnus hid the secrets to an immeasurable treasure within a web of transposition ciphers scattered across the town.</span>
                <span>You are an adventurer brave enough to take on the challenge of cracking these codes. Equipped with a decoder and your wits, you must navigate through layers of puzzles, each tougher than the last. The clock ticks relentlessly, and with every correct decipher, you get closer to uncovering Magnus’s greatest secret.</span>
                <span>Will you make it to the treasure and secure your name in history, or will the Code Vein remain unbroken?</span>
            </p> */}
            <hr />
            <h1 className={rulesStyles.title}>RULES</h1>
            <hr />
            {/* Confused, worry about this accordion stuff later */}
            {/* <div className="space-y-2">
                {rules.map((rule, index) => (
                    <div key={index} className="rule">
                    <button
                        onClick={() => toggleSection(index)}
                        className="w-full px-4 py-3 flex justify-between items-center bg-gray-900 hover:bg-gray-800"
                    >
                        <span className="font-medium">{rule.title}</span>
                        <FaAngleDown 
                        className={`transform transition-transform ${
                            openSection === index ? 'rotate-180' : ''
                        }`}
                        />
                    </button>
                    
                    {openSection === index && (
                        <div className="px-4 py-3 bg-black border-t border-gray-700">
                        {rule.content}
                        </div>
                    )}
                    </div>
                ))}
            </div> */}
        </>
    )
}

export default Rules