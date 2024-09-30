"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

// Define the type for the context value
interface TopicContextType {
  topic: string;
  selectedValue: number;
  wordCount: number;
  level: string;
  paper: string;
  quality: string;
  deadline: string;
  subject: string;
  language: string;
  source: number;
  format: string;
  referencing: string;
  pricePerPage: number;
  totalPrice: number;
  setTopic: (newTopic: string) => void;
  setSelectedValue: (newSelectedValue: number) => void;
  setLevel: (newLevel: string) => void;
  setPaper: (newPaper: string) => void;
  setQuality: (newQuality: string) => void;
  setDeadline: (newDeadline: string) => void;
  setSubject: (newSubject: string) => void;
  setLanguage: (newLanguage: string) => void;
  setSource: (newSource: number) => void;
  setFormat: (newFormat: string) => void;
  setReferencing: (newReferencing: string) => void;
}

// Create the context with an initial value of undefined
const TopicContext = createContext<TopicContextType | undefined>(undefined);

// Create a Provider Component
export const TopicProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [topic, setTopic] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<number>(1); // Pages
  const [wordCount, setWordCount] = useState<number>(250); // Words per page
  const [level, setLevel] = useState<string>("undergraduate");
  const [paper, setPaper] = useState<string>("Dissertation");
  const [quality, setQuality] = useState<string>("Standard Quality");
  const [deadline, setDeadline] = useState<string>("10 to 31 days");
  const [subject, setSubject] = useState<string>("Chemistry");
  const [language, setLanguage] = useState<string>("uk");
  const [source, setSource] = useState<number>(10);
  const [format, setFormat] = useState<string>("Double Spaced");
  const [referencing, setReferencing] = useState<string>("Harvard Referencing");

  const [pricePerPage, setPricePerPage] = useState<number>(8); // Initial price per page
  const [totalPrice, setTotalPrice] = useState<number>(8 * selectedValue); // Total price

  // Update word count when selectedValue changes
  useEffect(() => setWordCount(selectedValue * 250), [selectedValue]);

  // Function to calculate price based on wordCount, deadline, format, and quality
  const calculatePrice = () => {
    let basePricePerPage = 8;

    // Adjust price based on deadline
    switch (deadline) {
      case "10 to 31 days":
        basePricePerPage = 8;
        break;
      case "6 to 9 days":
        basePricePerPage = 10;
        break;
      case "3 to 5 days":
        basePricePerPage = 12;
        break;
      case "2 days":
        basePricePerPage = 18;
        break;
      case "1 day":
        basePricePerPage = 20;
        break;
      case "12 hours to 24 hours":
        basePricePerPage = 24;
        break;
      case "5 to 11 hours":
        basePricePerPage = 29;
        break;
      case "1 to 4 hours":
        basePricePerPage = 34;
        break;
      default:
        basePricePerPage = 8;
    }

    // Adjust price if format is single spaced
    if (format === "Single Spaced") {
      basePricePerPage += 9;
    }

    // Adjust price if quality is premium
    if (quality === "Premium Quality") {
      basePricePerPage += 5;
    }

    // Set the price per page
    setPricePerPage(basePricePerPage);

    // Calculate the total price based on the number of pages
    const total = basePricePerPage * selectedValue;
    setTotalPrice(total);
  };

  // Update price whenever relevant values change
  useEffect(() => {
    calculatePrice();
  }, [selectedValue, deadline, format, quality]);

  return (
    <TopicContext.Provider
      value={{
        topic,
        setTopic,
        selectedValue,
        setSelectedValue,
        wordCount,
        level,
        setLevel,
        paper,
        setPaper,
        quality,
        setQuality,
        deadline,
        setDeadline,
        subject,
        setSubject,
        language,
        setLanguage,
        source,
        setSource,
        format,
        setFormat,
        referencing,
        setReferencing,
        pricePerPage, // Price per page
        totalPrice, // Total price
      }}
    >
      {children}
    </TopicContext.Provider>
  );
};

// Create a custom hook for easier access to the context
export const useTopic = (): TopicContextType => {
  const context = useContext(TopicContext);
  if (!context) {
    throw new Error("useTopic must be used within a TopicProvider");
  }
  return context;
};
