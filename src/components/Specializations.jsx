import React from 'react';
import SectionHeader from './SectionHeader';
import SkillCard from './SkillCard';
import { specializations } from '../data/portfolioData';

/**
 * Specializations / Technical Domains Section
 */
export default function Specializations() {
  return (
    <section id="skills" className="scroll-mt-24 space-y-6 sm:space-y-8">
      <SectionHeader
        badge="სპეციალიზაცია & დომენები"
        badgeColor="cyan"
        title="ტექნოლოგიური მიმართულებები"
        icon="fa-solid fa-microchip"
        description="კომპიუტერული სისტემების, ალგორითმებისა და ვებ-ტექნოლოგიების ძირითადი მიმართულებები"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {specializations.map((spec) => (
          <SkillCard
            key={spec.id}
            badge={spec.badge}
            iconText={spec.iconText}
            iconColor={spec.iconColor}
            title={spec.title}
            subtitle={spec.subtitle}
            description={spec.description}
            tags={spec.tags}
          />
        ))}
      </div>
    </section>
  );
}
