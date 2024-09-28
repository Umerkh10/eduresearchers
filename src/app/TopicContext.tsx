"use client"
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the type for the context value
interface TopicContextType {
    topic: string;
    selectedValue:number;
    wordCount:number;
    level:string;
    setTopic: (newTopic: string) => void;
    setSelectedValue: (newSelectedValue: number) => void;
    setLevel: (newLevel: string) => void;
}

// Create the context with an initial value of undefined
const TopicContext = createContext<TopicContextType | undefined>(undefined);

// Create a Provider Component
export const TopicProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [topic, setTopic] = useState<string>('');
    const [selectedValue, setSelectedValue] = useState<number>(1);
    const [wordCount, setWordCount] = useState<number>(250);
    const [level, setLevel] = useState<string>('undergraduate');

    useEffect(()=>setWordCount(selectedValue * 250),[selectedValue])


    return (
        <TopicContext.Provider value={{ topic, setTopic,selectedValue,setSelectedValue,wordCount,level,setLevel }}>
            {children}
        </TopicContext.Provider>
    );
};

// Create a custom hook for easier access to the context
export const useTopic = (): TopicContextType => {
    const context = useContext(TopicContext);
    if (!context) {
        throw new Error('useTopic must be used within a TopicProvider');
    }
    return context;
};
