import React from 'react';
import EmployeesSection from '../components/EmployeesSection';

/**
 * Employees Page (Route: "/employees")
 * Dedicated team management page connecting to JSONPlaceholder REST API
 */
export default function EmployeesPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <EmployeesSection />
    </div>
  );
}
