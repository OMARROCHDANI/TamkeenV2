// Added import to resolve the 'Cannot find namespace React' error
import React from 'react';

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  link?: string;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: React.ReactNode;
}