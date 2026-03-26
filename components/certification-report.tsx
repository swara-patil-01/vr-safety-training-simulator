'use client';

import { Certification } from '@/lib/mock-data';
import { CheckCircle, Clock, Users, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CertificationReportProps {
  certification: Certification;
  moduleName: string;
}

export function CertificationReport({ certification, moduleName }: CertificationReportProps) {
  const handleDownload = () => {
    // Generate a simple PDF-like text report
    const reportText = `
CONSTRUCTION SITE SAFETY TRAINING
PROFESSIONAL CERTIFICATION REPORT
═══════════════════════════════════════════════════════════════

TRAINEE INFORMATION
Name: ${certification.userName}
Certification ID: ${certification.id}
Date of Completion: ${new Date(certification.completionDate).toLocaleDateString()}

MODULE INFORMATION
Module: ${moduleName}
Duration Completed: Based on module difficulty level
Passing Requirement: Module specific passing score

PERFORMANCE RESULTS
Performance Score: ${certification.score}%
Status: ${certification.passingStatus}
Passing Threshold: 70-80% (depending on level)

COMPETENCIES ACHIEVED
${certification.competenciesAchieved.map((c) => `✓ ${c}`).join('\n')}

ROLE QUALIFICATIONS
This certification qualifies you for the following on-site roles:
${certification.rolesQualified.map((r) => `• ${r}`).join('\n')}

CERTIFICATION VALIDITY
Issue Date: ${new Date(certification.completionDate).toLocaleDateString()}
Expiration Date: ${new Date(certification.expirationDate).toLocaleDateString()}
Valid Period: 2 years from completion

INDUSTRY STANDARDS
This training aligns with OSHA safety standards and industry best practices
for construction site operations. Certification indicates demonstrated competency
in the specified safety areas.

NEXT STEPS
Review recommended follow-up modules to advance your safety proficiency.
Stay current with industry updates and regulatory changes.

═══════════════════════════════════════════════════════════════
This is an official training completion document.
`;

    const element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(reportText)
    );
    element.setAttribute('download', `certification-${certification.id}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-card border border-border rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-orange-600 px-8 py-8 text-primary-foreground">
        <div className="flex items-center gap-3 mb-3">
          <CheckCircle className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Certification Report</h1>
        </div>
        <p className="text-orange-100 text-sm">Professional Training Completion Document</p>
      </div>

      <div className="p-8 space-y-8">
        {/* Trainee Information */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">
            Trainee Information
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Name</p>
              <p className="font-semibold text-foreground">{certification.userName}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Certification ID</p>
              <p className="font-mono text-sm text-foreground">{certification.id}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Completion Date</p>
              <p className="font-semibold text-foreground">
                {new Date(certification.completionDate).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Module</p>
              <p className="font-semibold text-foreground">{moduleName}</p>
            </div>
          </div>
        </section>

        {/* Performance Results */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">
            Performance Results
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-sm text-muted-foreground mb-2">Performance Score</p>
              <p className="text-4xl font-bold text-green-600 dark:text-green-400">{certification.score}%</p>
            </div>
            <div className={`p-6 rounded-lg border ${
              certification.passingStatus === 'Pass'
                ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800'
                : 'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 border-red-200 dark:border-red-800'
            }`}>
              <p className="text-sm text-muted-foreground mb-2">Status</p>
              <p className={`text-2xl font-bold ${
                certification.passingStatus === 'Pass'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-red-600 dark:text-red-400'
              }`}>
                {certification.passingStatus}
              </p>
            </div>
          </div>
        </section>

        {/* Competencies */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">
            Competencies Achieved
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certification.competenciesAchieved.map((competency) => (
              <div
                key={competency}
                className="flex items-center gap-3 bg-secondary/50 p-3 rounded-lg border border-border"
              >
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-foreground font-medium">{competency}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Role Qualifications */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">
            Qualified On-Site Roles
          </h2>
          <div className="flex flex-wrap gap-3">
            {certification.rolesQualified.map((role) => (
              <div
                key={role}
                className="flex items-center gap-2 bg-primary/10 dark:bg-primary/20 px-4 py-2 rounded-full border border-primary/30"
              >
                <Users className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">{role}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Validity Information */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">
            Certification Validity
          </h2>
          <div className="flex items-start gap-4 bg-secondary/30 p-4 rounded-lg border border-border">
            <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-2">
                Valid from {new Date(certification.completionDate).toLocaleDateString()} to{' '}
                {new Date(certification.expirationDate).toLocaleDateString()}
              </p>
              <p className="text-foreground font-medium">2-Year Professional Certification</p>
              <p className="text-sm text-muted-foreground mt-1">
                This certification demonstrates your proficiency and readiness for the specified roles and tasks
                on construction sites.
              </p>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-6 border-t border-border">
          <Button
            onClick={handleDownload}
            className="flex-1 gap-2 bg-primary hover:bg-orange-600 text-primary-foreground"
          >
            <Download className="w-4 h-4" />
            Download Report
          </Button>
          <Button variant="outline" className="flex-1">
            View Learning Paths
          </Button>
        </div>
      </div>
    </div>
  );
}
