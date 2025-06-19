import { useState } from 'react';

export const useAccordion = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (key: string) => {
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isOpen = (key: string) => !!openSections[key];

  return { toggleSection, isOpen };
};
