import React, { useState } from 'react';
import Navigation from './components/Navigation';
import ChatComponent from './components/ChatComponent';
import RecipeComponent from './components/RecipeComponent';
import ImageComponent from './components/ImageComponent';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('chat');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'chat':
        return <ChatComponent />;
      case 'recipe':
        return <RecipeComponent />;
      case 'image':
        return <ImageComponent />;
      default:
        return <ChatComponent />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="py-8">
        {renderActiveComponent()}
      </main>
    </div>
  );
};

export default App;
