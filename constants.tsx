
import React from 'react';
import { ShieldCheck, Sparkles, Heart, Scale } from 'lucide-react';
import { CaseStudy, ValueProp } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'Noor Modesty',
    category: 'E-commerce',
    image: 'https://picsum.photos/seed/noor/1200/800',
    description: 'A premium retail experience built on principles of dignity and Ihsan.'
  },
  {
    id: '2',
    title: 'Halal Harvest',
    category: 'Fintech',
    image: 'https://picsum.photos/seed/harvest/1200/800',
    description: 'Transparent supply chain tracking for ethical consumerism.'
  },
  {
    id: '3',
    title: 'Minaret Collective',
    category: 'Education',
    image: 'https://picsum.photos/seed/minaret/1200/800',
    description: 'Connecting global scholars through a sophisticated digital learning portal.'
  },
  {
    id: '4',
    title: 'The Artisanal Path',
    category: 'Portfolio',
    image: 'https://picsum.photos/seed/path/1200/800',
    description: 'Showcasing traditional craftsmanship in a modern digital frame.'
  }
];

export const VALUES: ValueProp[] = [
  {
    title: 'Ihsaan (Excellence)',
    description: 'To do beautiful work as if we see the Creator. We settle for nothing less than perfection in craftsmanship.',
    icon: <Sparkles className="w-8 h-8 text-cta" />
  },
  {
    title: 'Amanah (Trust)',
    description: 'Your vision is a trust we hold. We operate with radical transparency and absolute integrity.',
    icon: <ShieldCheck className="w-8 h-8 text-cta" />
  },
  {
    title: 'Mizan (Balance)',
    description: 'Harmonizing high-end aesthetics with ethical boundaries. Beautiful design that respects the soul.',
    icon: <Scale className="w-8 h-8 text-cta" />
  },
  {
    title: 'Rahma (Compassion)',
    description: 'User experiences designed with empathy, accessibility, and human-centric care.',
    icon: <Heart className="w-8 h-8 text-cta" />
  }
];
