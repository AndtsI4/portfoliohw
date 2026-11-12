import React from 'react';
import SectionHeader from './SectionHeader';
import SkillCard from './SkillCard';
import { specializations } from '../data/portfolioData';

/**
 * Specializations / Skills Section
 * Uses SectionHeader and maps over specializations array with reusable SkillCard
 */
export default function Specializations() {
  return (
    <section id="skills" className="scroll-mt-24 space-y-6 sm:space-y-8">
      <SectionHeader
        badge="სპეციალიზაცია"
        badgeColor="indigo"
        title="მიმართულებები"
        icon="fa-solid fa-code"
        description="ტექნოლოგიური სფეროები და ინტერესები, რომლებშიც აქტიურად ვმუშაობ"
      />

      {/* Grid of reusable SkillCards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {specializations.map((spec) => (
          <SkillCard
            key={spec.id}
            iconText={spec.iconText}
            iconColor={spec.iconColor}
            title={spec.title}
            description={spec.description}
            tags={spec.tags}
          />
        ))}
      </div>
    </section>
  );
}
