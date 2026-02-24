
import React from 'react';
import { ShieldCheck, Sparkles, Heart, Scale } from 'lucide-react';
import { CaseStudy, ValueProp } from './types';

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: '1',
        title: 'Noor Modesty',
        category: 'Concept',
        image: 'https://picsum.photos/seed/noor/1200/800',
        description: 'Premium modest e-commerce positioning.'
    },
    {
        id: '2',
        title: 'Halal Harvest',
        category: 'Prototype',
        image: 'https://picsum.photos/seed/harvest/1200/800',
        description: 'Structured trust-based transparency system.'
    },
    {
        id: '3',
        title: 'Minaret Collective',
        category: 'Concept',
        image: 'https://picsum.photos/seed/minaret/1200/800',
        description: 'Focused educational portal architecture.'
    }
];

export const VALUES: ValueProp[] = [
    {
        title: 'Ihsan — Excellence',
        description: 'Precision in every detail.',
        icon: <Sparkles className="w-8 h-8 text-cta" />
    },
    {
        title: 'Tamkeen',
        description: 'From Presence to Power. Your website must strengthen your position. When value-driven brands grow, the Ummah grows stronger.',
        icon: <ShieldCheck className="w-8 h-8 text-cta" />
    },
    {
        title: 'Izzah — Dignity',
        description: 'No humiliation marketing. No desperation funnels.',
        icon: <Scale className="w-8 h-8 text-cta" />
    },
    {
        title: 'Sidq — Truthfulness',
        description: 'Clear communication. Honest positioning. Design that clarifies — not manipulates.',
        icon: <Heart className="w-8 h-8 text-cta" />
    }
];
