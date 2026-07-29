/**
 * Pharma GxP IT Academy - Curriculum
 * Educational summaries based on GAMP 5 (ISPE), ALCOA+, 21 CFR Part 11,
 * EU Annex 11, Cisco networking fundamentals, cloud GxP practices,
 * software development processes, architecture and IT structures.
 * For learning only – always consult current official guidance.
 */
const CURRICULUM = {

  modules: [
    {
      id: 'm1',
      title: 'Foundations of Pharma IT & GxP',
      level: 'Beginner',
      xpReward: 150,
      description: 'Regulated landscape, why IT systems matter, core GxP concepts.',
      lessons: [
        {
          id: 'm1-l1',
          title: 'What is GxP and Why IT Matters',
          duration: '12 min',
          content: '<h2>GxP – Good “x” Practice</h2><p>GxP covers regulations ensuring quality, safety and efficacy of pharmaceuticals and related activities: <strong>GMP</strong> (Manufacturing), <strong>GLP</strong> (Laboratory), <strong>GCP</strong> (Clinical), <strong>GDP</strong> (Distribution), <strong>GVP</strong> (Pharmacovigilance).</p><p>Almost every critical process is supported by computerized systems (MES, LIMS, eQMS, Electronic Batch Records, CTMS…). Failure or incorrect data can cause patient harm, quality failures, data integrity breaches, regulatory action or loss of licence.</p><div class="key-box"><strong>Key drivers:</strong> <span class="ref-tag">FDA 21 CFR Part 11</span> <span class="ref-tag">EU GMP Annex 11</span> <span class="ref-tag">PIC/S</span> <span class="ref-tag">WHO</span> <span class="ref-tag">ISPE GAMP 5</span></div><h2>Role of IT in a regulated company</h2><p>IT partners with Quality: infrastructure qualification, supporting CSV/CSA, change control, security &amp; audit trails, backup/DR for regulated data, supplier assessment of SaaS/cloud providers.</p><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=ZUBWcpHx5Rw" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/ZUBWcpHx5Rw/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">GxP / Pharma IT context – Foundations overview (related regulatory framing)</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/data-integrity-and-compliance-drug-cgmp-questions-and-answers" target="_blank" rel="noopener noreferrer">FDA — Data Integrity & CGMP Q&A</a><a href="https://ispe.org/GAMP-Training" target="_blank" rel="noopener noreferrer">ISPE — What is GAMP?</a></div>'
        },
        {
          id: 'm1-l2',
          title: 'Key Regulatory Frameworks',
          duration: '14 min',
          content: '<h2>United States – FDA</h2><p><strong>21 CFR Part 11</strong> (Electronic Records; Electronic Signatures) sets criteria for trustworthy electronic records and signatures equivalent to paper. Requires validation, audit trails, access controls, operational checks, training and signature controls. Predicate GMP/GLP/GCP rules still apply.</p><h2>European Union</h2><p><strong>Annex 11 – Computerised Systems</strong> applies to all computerised systems used in GMP activities. Emphasises risk management, supplier assessment, lifecycle validation, data integrity, security, change control and periodic evaluation.</p><h2>Industry guidance</h2><p><strong>ISPE GAMP 5</strong> (2nd Edition 2022) is the globally adopted risk-based framework for planning and executing validation of GxP computerized systems. It is guidance, not law, but aligns with regulatory expectations and supports modern practices (cloud, Agile, critical thinking).</p><div class="key-box success">Regulations define the “what”; GAMP and related guides provide practical, scalable “how”.</div><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=YAaNCk5euq0" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/YAaNCk5euq0/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">21 CFR Part 11: Electronic Records & Signatures Explained</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://www.gmp-compliance.org/files/guidemgr/annex11_01-2011_en.pdf" target="_blank" rel="noopener noreferrer">EU GMP Annex 11 (Computerised Systems)</a><a href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/data-integrity-and-compliance-drug-cgmp-questions-and-answers" target="_blank" rel="noopener noreferrer">FDA 21 CFR Part 11 overview context</a></div>'
        },
        {
          id: 'm1-l3',
          title: 'Patient Safety, Quality & Data Integrity',
          duration: '10 min',
          content: '<h2>The three pillars</h2><p>Every validation decision should ultimately protect:</p><ol><li><strong>Patient safety</strong></li><li><strong>Product quality</strong></li><li><strong>Data integrity</strong></li></ol><p>GAMP 5 stresses critical thinking and a patient-centric, risk-based approach over pure compliance checklists.</p><h2>GxP Impact Assessment</h2><p>Before deciding validation depth, assess whether the system generates data for release/submissions, controls processes affecting quality, manages electronic records/signatures, and what happens if it fails. High-impact systems receive deeper assurance; low-impact systems receive proportionate controls.</p><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=sjgerJ0lF_k" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/sjgerJ0lF_k/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">Patient safety / quality / data integrity framing in regulated systems</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/data-integrity-and-compliance-drug-cgmp-questions-and-answers" target="_blank" rel="noopener noreferrer">FDA Data Integrity guidance (ALCOA framing)</a></div>'
        }
      ],
      quiz: {
        id: 'm1-quiz',
        title: 'Foundations Quiz',
        passScore: 70,
        xpReward: 100,
        questions: [
          { q: 'GxP is best described as:', options: ['Only manufacturing rules', 'Umbrella for Good Practice domains (GMP, GLP, GCP…)', 'A Cisco protocol', 'An ISO quality standard only'], correct: 1, explanation: 'GxP covers multiple Good Practice areas.' },
          { q: 'Which regulation specifically addresses electronic records and signatures in the US?', options: ['21 CFR Part 210', '21 CFR Part 11', 'HIPAA alone', 'Annex 11'], correct: 1, explanation: 'Part 11 is the FDA electronic records/signatures rule.' },
          { q: 'GAMP 5 is:', options: ['A binding EU law', 'ISPE risk-based guidance for GxP computerized systems', 'A networking certification', 'A replacement for all regulations'], correct: 1, explanation: 'GAMP 5 is industry guidance published by ISPE.' },
          { q: 'The three core pillars protected by GxP IT controls are:', options: ['Cost, speed, convenience', 'Patient safety, product quality, data integrity', 'Uptime, bandwidth, storage', 'Aesthetics and volume of paper'], correct: 1, explanation: 'Safety, quality and data integrity are the ultimate goals.' },
          { q: 'Annex 11 applies to:', options: ['Only clinical systems', 'All computerised systems used in GMP activities', 'Only custom software', 'Only cloud systems'], correct: 1, explanation: 'Annex 11 covers all forms of computerised systems in GMP.' }
        ]
      }
    },
    {
      id: 'm2',
      title: 'Data Integrity & ALCOA+',
      level: 'Beginner',
      xpReward: 180,
      description: 'Foundational principles of trustworthy data that underpin every regulated system.',
      lessons: [
        {
          id: 'm2-l1',
          title: 'ALCOA and ALCOA+ Explained',
          duration: '16 min',
          content: '<h2>Original ALCOA (FDA origin, 1990s)</h2><ul><li><strong>Attributable</strong> – Who did it and when? Traceable to person or system. No shared logins.</li><li><strong>Legible</strong> – Readable and permanent for the retention period.</li><li><strong>Contemporaneous</strong> – Recorded at the time of the activity (no back-dating).</li><li><strong>Original</strong> – First capture or certified true copy.</li><li><strong>Accurate</strong> – Correctly reflects reality.</li></ul><h2>ALCOA+ additions</h2><ul><li><strong>Complete</strong> – All data including failures, repeats and metadata.</li><li><strong>Consistent</strong> – Logical sequence and format across related records.</li><li><strong>Enduring</strong> – Survives the full retention period.</li><li><strong>Available</strong> – Retrievable when needed by company or inspectors.</li></ul><div class="key-box">Some sources add Traceable (ALCOA++) as the glue across the lifecycle.</div><p>Every technical control (unique IDs, audit trails, time sync, backups, access restrictions) ultimately enforces one or more of these attributes.</p><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=IFApeoBMLaI" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/IFApeoBMLaI/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">Ensuring Data Integrity: ALCOA++ demonstrated for Pharma Industry</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/data-integrity-and-compliance-drug-cgmp-questions-and-answers" target="_blank" rel="noopener noreferrer">FDA — Data Integrity and Compliance With Drug CGMP</a><a href="https://www.spectroscopyonline.com/view/is-traceability-the-glue-for-alcoa-alcoa-or-alcoa-" target="_blank" rel="noopener noreferrer">PIC/S / industry ALCOA+ discussion (Spectroscopy Online)</a></div>'
        },
        {
          id: 'm2-l2',
          title: 'Failures, Controls & Data Governance',
          duration: '14 min',
          content: '<h2>Common inspection findings</h2><p>Shared accounts, disabled/incomplete audit trails, ability to delete/alter without record, weak backup testing, non-contemporaneous recording, uncontrolled spreadsheets.</p><h2>Technical controls mapped to ALCOA+</h2><p><strong>Attributable:</strong> unique users, e-signatures, audit who/when.<br><strong>Legible/Enduring:</strong> controlled formats, migration plans, media refresh.<br><strong>Contemporaneous:</strong> NTP time sync, real-time entry, no back-date capability.<br><strong>Original/Complete:</strong> raw data retained, change audit trails, no uncontrolled deletion.<br><strong>Accurate:</strong> input validation, protected calculations, validated interfaces, review workflows.</p><div class="key-box warning">Technology is necessary but not sufficient. Procedures, training, quality culture and management oversight are equally critical.</div><h2>Data lifecycle & governance</h2><p>Assure integrity from generation → processing → review → reporting → retention → retrieval → destruction. Formal data governance (policies, roles, training, monitoring, management review) is expected by FDA, PIC/S and WHO.</p><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=PNw-KcGbFjo" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/PNw-KcGbFjo/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">If It&#39;s Not Documented, It Didn&#39;t Happen? ALCOA+ Explained</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/data-integrity-and-compliance-drug-cgmp-questions-and-answers" target="_blank" rel="noopener noreferrer">FDA Data Integrity Q&A</a></div>'
        }
      ],
      quiz: {
        id: 'm2-quiz',
        title: 'Data Integrity Quiz',
        passScore: 70,
        xpReward: 120,
        questions: [
          { q: 'Back-dating an entry primarily violates:', options: ['Attributable', 'Legible', 'Contemporaneous', 'Accurate'], correct: 2, explanation: 'Contemporaneous requires recording at the time of activity.' },
          { q: 'ALCOA+ adds which four attributes?', options: ['Secure, Traceable, Validated, Approved', 'Complete, Consistent, Enduring, Available', 'Encrypted, Backed-up, Versioned, Signed', 'Fast, Cheap, Good, Documented'], correct: 1, explanation: 'Complete, Consistent, Enduring, Available.' },
          { q: 'Shared generic logins primarily violate:', options: ['Legible', 'Attributable', 'Enduring', 'Available'], correct: 1, explanation: 'Attributable requires tracing to a specific individual.' },
          { q: '“Complete” means:', options: ['Only final results are kept', 'All data including failed runs and metadata are retained', 'Optional under Annex 11', 'Only paper records'], correct: 1, explanation: 'Completeness allows full reconstruction of activities.' },
          { q: 'Data governance is:', options: ['IT-only', 'Policies, roles, training and oversight across the data lifecycle', 'Identical to system validation', 'Only for cloud'], correct: 1, explanation: 'It is an organisational quality-system element.' }
        ]
      }
    },
    {
      id: 'm3',
      title: 'GAMP 5 Framework & Categories',
      level: 'Intermediate',
      xpReward: 200,
      description: 'Industry-standard risk-based approach to validating GxP computerized systems.',
      lessons: [
        {
          id: 'm3-l1',
          title: 'GAMP 5 Key Principles',
          duration: '14 min',
          content: '<h2>What is GAMP 5?</h2><p>ISPE guide: A Risk-Based Approach to Compliant GxP Computerized Systems. 2nd Edition (2022) addresses cloud, Agile, AI/ML, open-source and critical thinking while keeping the core framework.</p><h2>Five key principles</h2><ol><li><strong>Product &amp; Process Understanding</strong> – decisions driven by real impact on safety, quality and data integrity.</li><li><strong>Lifecycle within a Quality System</strong> – concept through retirement under the PQS; not a one-time event.</li><li><strong>Scalable activities</strong> – effort proportional to risk, complexity and novelty.</li><li><strong>Science-based QRM</strong> – aligned with ICH Q9; focus where it matters.</li><li><strong>Leverage supplier involvement</strong> – use supplier evidence after assessment rather than reinventing everything.</li></ol><div class="key-box success">2nd Edition strongly supports critical thinking and well-controlled modern development methods.</div><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=Rg-KjDj8KIs" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/Rg-KjDj8KIs/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">GAMP® 5 Guide, 2nd Edition: What&#39;s New (ISPE)</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition" target="_blank" rel="noopener noreferrer">ISPE GAMP 5 Guide, 2nd Edition</a><a href="https://www.outsourcedpharma.com/doc/how-does-the-gamp-second-edition-update-look-one-year-later-0001" target="_blank" rel="noopener noreferrer">GAMP 5 Second Edition — one year later (Sion Wyn)</a></div>'
        },
        {
          id: 'm3-l2',
          title: 'Software Categories',
          duration: '12 min',
          content: '<h2>Four active categories (Cat 2 firmware removed)</h2><p><strong>Cat 1 – Infrastructure:</strong> OS, databases, middleware, hypervisors, network services. Usually <em>qualified</em> (install/config verification); application features tested indirectly.</p><p><strong>Cat 3 – Non-configured products:</strong> COTS used largely as-supplied. Supplier assessment + verification against requirements.</p><p><strong>Cat 4 – Configured products:</strong> LIMS, MES, ERP, eQMS configured to processes. Configuration is novel and must be specified and verified. Most enterprise GxP systems sit here.</p><p><strong>Cat 5 – Custom applications:</strong> Bespoke or heavily customised code. Full lifecycle evidence expected. Highest effort.</p><div class="key-box">Real systems are hybrids. Categories are a continuum and only one scaling factor alongside GxP impact, complexity and novelty.</div><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=o1Jst3Z_1N4" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/o1Jst3Z_1N4/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">GAMP5 Categories Explained: Category 1–5 with Timeline Breakdown</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition" target="_blank" rel="noopener noreferrer">ISPE GAMP 5 Guide, 2nd Edition</a><a href="https://kneat.com/article/what-is-gamp-5/" target="_blank" rel="noopener noreferrer">GAMP 5 categories & validation overview (Kneat)</a></div>'
        },
        {
          id: 'm3-l3',
          title: 'Lifecycle & Specification–Verification',
          duration: '10 min',
          content: '<h2>Specification & verification (V-model heritage)</h2><p>URS → Functional Spec → Design/Config Spec → Build → Unit/Integration tests → System/Acceptance tests (IQ/OQ/PQ or equivalent). Traceability between requirements and tests is essential.</p><h2>Agile & iterative support</h2><p>2nd Edition recognises non-linear lifecycles. Well-controlled Agile can deliver GxP software when requirements/risks are managed, appropriate evidence is retained (often in tools), and fitness for intended use is still demonstrated. Critical thinking replaces unnecessary duplicate linear documentation.</p><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=lji7us6-rqg" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/lji7us6-rqg/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">Technical Tuesday GAMP5 V2 – lifecycle, Agile, critical thinking (ISPE Singapore)</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://www.outsourcedpharma.com/doc/how-does-the-gamp-second-edition-update-look-one-year-later-0001" target="_blank" rel="noopener noreferrer">GAMP 5 Second Edition updates & Agile (Outsourced Pharma)</a></div>'
        }
      ],
      quiz: {
        id: 'm3-quiz',
        title: 'GAMP 5 Quiz',
        passScore: 70,
        xpReward: 130,
        questions: [
          { q: 'Highest validation effort is typically required for:', options: ['Cat 1 Infrastructure', 'Cat 3 Non-configured', 'Cat 4 Configured', 'Cat 5 Custom'], correct: 3, explanation: 'Custom has maximum novelty.' },
          { q: 'Category 1 software is usually:', options: ['Fully validated with URS/FS/DS', 'Qualified (install/config) rather than application-validated', 'Ignored', 'Only non-regulated'], correct: 1, explanation: 'Infrastructure is qualified.' },
          { q: 'A core GAMP 5 principle is:', options: ['Maximum documentation always', 'Leveraging supplier involvement where justified', 'Never use Agile', 'Validate only custom code'], correct: 1, explanation: 'Leveraging suppliers improves efficiency.' },
          { q: 'Categories should be viewed as:', options: ['Strict exclusive boxes', 'A continuum; systems often mix categories', 'Only for on-prem', 'Replaced by cloud scores'], correct: 1, explanation: '2nd Ed emphasises continuum.' },
          { q: 'Scaling validation ensures:', options: ['Minimum docs regardless of risk', 'Effort matches risk, complexity and novelty', 'Maximum paper for auditors', 'No testing for Cat 1'], correct: 1, explanation: 'Resources focus where impact is highest.' }
        ]
      }
    },
    {
      id: 'm_sdp',
      title: 'Software Development Processes in GxP',
      level: 'Intermediate',
      xpReward: 220,
      description: 'SDLC models, requirements, controlled Agile, coding, testing and configuration management in regulated environments.',
      lessons: [
        {
          id: 'm_sdp-l1',
          title: 'SDLC Models in a Regulated Context',
          duration: '15 min',
          content: '<h2>Why development process matters in GxP</h2><p>How software is built directly affects the quality of evidence available for validation, the ability to maintain the validated state, and the risk of defects that could impact patient safety or data integrity.</p><h2>Common models and their GxP fit</h2><ul><li><strong>Waterfall / V-model</strong> – classic linear progression with clear specification gates. Easy to map to URS → FS → DS → tests. Still widely used for high-criticality or highly novel systems.</li><li><strong>Iterative / Incremental</strong> – delivers working slices; each increment can be risk-assessed and verified.</li><li><strong>Controlled Agile</strong> – GAMP 5 2nd Edition explicitly supports well-implemented Agile. Key is retaining requirements/risk visibility, producing adequate evidence (often inside tools), and still demonstrating fitness for intended use. Do not “Agile-wash” by removing necessary controls.</li><li><strong>Hybrid</strong> – most common in practice: Agile for lower-risk or UI layers, more formal gates for critical algorithms, interfaces and data integrity features.</li></ul><div class="key-box">The process must still support product &amp; process understanding, risk-based decisions, and scalable lifecycle activities – the five GAMP principles remain the north star.</div><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=lji7us6-rqg" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/lji7us6-rqg/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">GAMP 5 & modern development approaches (Agile support discussion)</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://www.outsourcedpharma.com/doc/how-does-the-gamp-second-edition-update-look-one-year-later-0001" target="_blank" rel="noopener noreferrer">GAMP 5 Second Edition — Agile & critical thinking</a><a href="https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition" target="_blank" rel="noopener noreferrer">ISPE GAMP 5 Guide page</a></div>'
        },
        {
          id: 'm_sdp-l2',
          title: 'Requirements, Design Input & Configuration Management',
          duration: '14 min',
          content: '<h2>Requirements engineering</h2><p>Clear, testable, risk-prioritised requirements (URS and derived functional requirements) are the foundation. Ambiguous or missing requirements are a leading cause of validation pain and later defects.</p><p>Good practices: involve process owners and QA early, distinguish user needs from design solutions, maintain traceability, and version-control the requirements baseline.</p><h2>Configuration &amp; version control</h2><p>In GxP environments every controlled item (requirements, design, code, configuration, test scripts, build artefacts) should be under configuration management. Typical expectations:</p><ul><li>Unique identification and versioning</li><li>Baseline and change history</li><li>Access control and review/approval of changes</li><li>Ability to recreate any released version</li></ul><p>Modern tools (Git + controlled workflows, ALM platforms) can satisfy these needs when procedures and training match the tool usage.</p><div class="key-box warning">Uncontrolled “shadow IT” spreadsheets, macros or scripts that affect GxP decisions create significant data-integrity and validation risk.</div><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=Dhwih8HvK5k" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/Dhwih8HvK5k/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">CSV / requirements & lifecycle context (Pharma Quality series style)</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition" target="_blank" rel="noopener noreferrer">ISPE GAMP 5 Guide, 2nd Edition</a></div>'
        },
        {
          id: 'm_sdp-l3',
          title: 'Coding Standards, Reviews, Testing & CI/CD Considerations',
          duration: '14 min',
          content: '<h2>Development practices that support validation</h2><ul><li><strong>Coding standards</strong> and static analysis reduce defects and improve maintainability/reviewability.</li><li><strong>Peer review / code review</strong> – documented evidence of independent review is valuable, especially for Cat 5 or critical configured logic.</li><li><strong>Unit and integration testing</strong> – automated where practical; results form part of the verification evidence.</li><li><strong>Test design</strong> – risk-based selection of test cases, positive/negative paths, boundary conditions, and data-integrity focused scenarios (audit trail, access, e-signature).</li></ul><h2>CI/CD and continuous delivery in GxP</h2><p>Continuous integration and delivery can be used, but the release into the validated production environment remains under change control. Typical pattern:</p><ul><li>Automated build + unit/integration tests on every commit</li><li>Controlled promotion through environments (dev → test → qualified/prod)</li><li>Formal change record, impact assessment and any additional OQ/PQ activities before production release</li><li>Immutable or tightly controlled deployment artefacts</li></ul><p>The goal is speed with control, not speed instead of control.</p><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=qkKdbO9C9Yk" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/qkKdbO9C9Yk/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">Computer System Validation testing & modern practices (GAMP 5 / CSA)</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://www.outsourcedpharma.com/doc/how-does-the-gamp-second-edition-update-look-one-year-later-0001" target="_blank" rel="noopener noreferrer">GAMP 5 & modern development practices</a></div>'
        }
      ],
      quiz: {
        id: 'm_sdp-quiz',
        title: 'Software Development Processes Quiz',
        passScore: 70,
        xpReward: 140,
        questions: [
          { q: 'GAMP 5 2nd Edition stance on Agile is best summarised as:', options: ['Agile is forbidden for GxP', 'Well-controlled Agile is supported when evidence and fitness for use are maintained', 'Only pure Waterfall is allowed', 'Agile replaces the need for risk assessment'], correct: 1, explanation: 'Critical thinking and controlled Agile are explicitly supported.' },
          { q: 'A leading cause of later validation and quality problems is:', options: ['Too many automated tests', 'Ambiguous or missing requirements', 'Using version control', 'Involving QA early'], correct: 1, explanation: 'Clear, testable requirements are foundational.' },
          { q: 'Configuration management in GxP should cover:', options: ['Only the final executable', 'Requirements, design, code, configuration, tests and build artefacts as controlled items', 'Only paper documents', 'Nothing once the system is live'], correct: 1, explanation: 'All controlled items need identification, versioning and change history.' },
          { q: 'In a GxP CI/CD pipeline, production release should still be:', options: ['Fully automatic with no human gate', 'Under change control with impact assessment and appropriate verification', 'Skipped for minor changes', 'Handled only by developers'], correct: 1, explanation: 'Speed must not bypass the validated-state controls.' },
          { q: 'Peer code review is particularly valuable for:', options: ['Only UI styling', 'Critical or custom (Cat 5) logic and as documented evidence of independent scrutiny', 'Replacing all testing', 'Non-GxP systems only'], correct: 1, explanation: 'Independent review strengthens assurance for higher-risk code.' }
        ]
      }
    },
    {
      id: 'm4',
      title: 'Computer System Validation (CSV)',
      level: 'Intermediate',
      xpReward: 220,
      description: 'Practical lifecycle from planning to retirement of a GxP system.',
      lessons: [
        {
          id: 'm4-l1',
          title: 'Planning, Risk & Supplier Assessment',
          duration: '13 min',
          content: '<h2>Validation planning</h2><p>Validation Master Plan describes overall approach; project Validation Plan scopes the specific system. Perform GxP impact assessment and risk assessment (ICH Q9 aligned) early to determine controls and testing depth. Modern guidance (FDA CSA, GAMP 5) focuses assurance on highest-risk functions.</p><h2>Supplier assessment</h2><p>For purchased or SaaS systems, assess quality system, development practices and available documentation. This decides how much supplier evidence can be leveraged and identifies residual risks the company must cover.</p><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=Dhwih8HvK5k" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/Dhwih8HvK5k/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">Basics of Computerized System Validation in Pharma Industry</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition" target="_blank" rel="noopener noreferrer">ISPE GAMP 5 Guide, 2nd Edition</a><a href="https://kneat.com/article/what-is-computer-system-validation/" target="_blank" rel="noopener noreferrer">CSV overview aligned with GAMP / Annex 11</a></div>'
        },
        {
          id: 'm4-l2',
          title: 'Specifications, Testing & Qualification',
          duration: '14 min',
          content: '<h2>Core documents</h2><p>URS (business needs) → Functional Spec → Design/Configuration Spec. Traceability (RTM or tool-based) links requirements to tests.</p><h2>Classic qualification terms</h2><ul><li><strong>IQ</strong> – installed correctly per specs/supplier instructions.</li><li><strong>OQ</strong> – operates according to functional specs across ranges.</li><li><strong>PQ</strong> – performs as intended in the real environment with real processes/data.</li></ul><p>Many organisations use broader terms (system testing, UAT) while covering the same intent. Controlled automated testing is increasingly accepted.</p><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=qkKdbO9C9Yk" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/qkKdbO9C9Yk/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">CSV Testing Explained | GAMP 5, FDA CSA & EU Annex 11</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://kneat.com/article/what-is-computer-system-validation/" target="_blank" rel="noopener noreferrer">What is Computer System Validation? (Kneat)</a></div>'
        },
        {
          id: 'm4-l3',
          title: 'Operation, Change Control & Retirement',
          duration: '11 min',
          content: '<h2>Maintaining the validated state</h2><p>Change control (impact assessment of every change), configuration management, periodic review, incident/deviation handling, backup/restore testing, security patching under control, ongoing training.</p><h2>Retirement</h2><p>Data must remain available, legible and authentic for the full retention period. Plan migration, archival and continued access. Document the decommissioning process.</p><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=yRSwc0bf4hU" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/yRSwc0bf4hU/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">The Complete Life Cycle Approach to Computerized System Validation</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://www.gmp-compliance.org/files/guidemgr/annex11_01-2011_en.pdf" target="_blank" rel="noopener noreferrer">EU GMP Annex 11</a></div>'
        }
      ],
      quiz: {
        id: 'm4-quiz',
        title: 'CSV Quiz',
        passScore: 70,
        xpReward: 140,
        questions: [
          { q: 'IQ primarily verifies:', options: ['Production user requirements', 'Correct installation per specifications', 'Supplier quality system only', 'All users trained'], correct: 1, explanation: 'Installation Qualification confirms correct install/config.' },
          { q: 'Change control after go-live is critical because:', options: ['Only needed for custom code', 'Any change can affect the validated state', 'Regulators forbid changes', 'It replaces periodic review'], correct: 1, explanation: 'Validated state must be maintained.' },
          { q: 'A Requirements Traceability Matrix shows:', options: ['Project costs', 'Relationship between requirements and verifying tests', 'User list', 'Network topology'], correct: 1, explanation: 'Ensures every requirement is verified.' },
          { q: 'Supplier assessment determines:', options: ['How to avoid all testing', 'How much supplier evidence can be leveraged and residual risks', 'Only for Cat 1', 'Cloud providers need none'], correct: 1, explanation: 'Enables efficient, risk-based reliance.' },
          { q: 'On system retirement the primary data concern is:', options: ['Immediate deletion', 'Data remains available and authentic for retention period', 'Move to paper only', 'Ignore archival'], correct: 1, explanation: 'Retention obligations survive the system.' }
        ]
      }
    },
    {
      id: 'm_arch',
      title: 'Software Architecture & Design for GxP',
      level: 'Advanced',
      xpReward: 230,
      description: 'Architectural principles, design specifications, patterns and design controls that support validation and data integrity.',
      lessons: [
        {
          id: 'm_arch-l1',
          title: 'Why Architecture Matters in Regulated Systems',
          duration: '13 min',
          content: '<h2>Architecture as a quality and compliance enabler</h2><p>Good architecture makes validation feasible, changes controllable, and data integrity enforceable. Poor architecture produces tightly coupled systems that are expensive to test, hard to change under change control, and prone to hidden data-integrity gaps.</p><h2>Key architectural concerns for GxP</h2><ul><li>Clear separation of concerns (presentation, business logic, data access, integration)</li><li>Explicit trust boundaries and security zones</li><li>Auditability – design that makes audit trails natural rather than bolted-on</li><li>Testability – ability to isolate and verify critical functions</li><li>Configurability vs customisation – knowing where Cat 4 ends and Cat 5 begins</li><li>Data model that supports ALCOA+ (attribution, completeness, history)</li></ul><div class="key-box">Architecture decisions should be risk-based and documented so they can be defended in an inspection and reused for impact assessment of later changes.</div><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=k3hKLd7vYZ8" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/k3hKLd7vYZ8/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">Intro to Software Architecture | Overview, Examples, and Diagrams</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition" target="_blank" rel="noopener noreferrer">GAMP 5 risk-based approach (ISPE)</a></div>'
        },
        {
          id: 'm_arch-l2',
          title: 'Design Specifications, Patterns & Interfaces',
          duration: '14 min',
          content: '<h2>From requirements to design</h2><p>Design / Configuration Specifications translate functional needs into concrete structure: components, interfaces, data stores, security controls, error handling and integration points. Traceability from URS/FS to design elements remains essential.</p><h2>Useful patterns in GxP systems</h2><ul><li>Layered / hexagonal architectures that isolate domain logic</li><li>Explicit integration layers (APIs, message queues) with clear contracts and error handling</li><li>Event or audit-log oriented designs that capture who/what/when as first-class data</li><li>Immutable or append-only stores for critical records where appropriate</li><li>Defence-in-depth security (authentication, authorisation, encryption, network controls)</li></ul><h2>Interface design</h2><p>Interfaces (instrument, ERP, MES, cloud services) are frequent sources of data-integrity and validation risk. Define ownership, data mapping, error handling, reconciliation and security for every interface; treat them as designed and verified components.</p><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=vxwqD3KwdEY" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/vxwqD3KwdEY/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">The hitchhiker&#39;s guide to software architecture and design</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition" target="_blank" rel="noopener noreferrer">ISPE GAMP 5 Guide, 2nd Edition</a></div>'
        },
        {
          id: 'm_arch-l3',
          title: 'Design Controls, Documentation & Evolution',
          duration: '12 min',
          content: '<h2>Design controls that support the validated state</h2><p>Architecture and detailed design should be reviewed (and for higher-risk systems formally approved) before major build effort. Subsequent changes to architecture or critical design elements go through change control with impact assessment on validation evidence.</p><h2>Living architecture</h2><p>In modern environments architecture is not a one-time document. Lightweight architecture decision records (ADRs), up-to-date diagrams in controlled repositories, and periodic architecture reviews help keep the design aligned with the running system and with regulatory expectations.</p><p>When systems evolve (new modules, cloud migration, major version upgrades) re-evaluate architectural risks, especially around data migration, identity, audit trails and integration contracts.</p><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=_w3979GVSuc" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/_w3979GVSuc/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">How Senior Engineers Structure Codebases (boundaries & responsibility)</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://www.outsourcedpharma.com/doc/how-does-the-gamp-second-edition-update-look-one-year-later-0001" target="_blank" rel="noopener noreferrer">GAMP 5 Second Edition reflections</a></div>'
        }
      ],
      quiz: {
        id: 'm_arch-quiz',
        title: 'Architecture & Design Quiz',
        passScore: 70,
        xpReward: 145,
        questions: [
          { q: 'A primary benefit of good architecture in GxP systems is:', options: ['Eliminating the need for validation', 'Making validation, change control and data-integrity controls more feasible and sustainable', 'Allowing unrestricted production changes', 'Removing the need for requirements'], correct: 1, explanation: 'Architecture enables rather than replaces assurance activities.' },
          { q: 'Auditability should ideally be:', options: ['Added only at the end if inspectors ask', 'Designed in so that who/what/when is captured naturally', 'Only relevant for paper systems', 'Handled solely by the network team'], correct: 1, explanation: 'Bolt-on audit trails are harder to trust and maintain.' },
          { q: 'Interfaces between systems are important because:', options: ['They are never validated', 'They are frequent sources of data-integrity and verification risk and need clear design and ownership', 'They only matter for Cat 1', 'They replace the need for URS'], correct: 1, explanation: 'Interfaces must be designed, owned and verified.' },
          { q: 'Architecture decision records (ADRs) help by:', options: ['Replacing all validation documents', 'Capturing significant decisions and rationale for later impact assessment and inspection defence', 'Hiding design from QA', 'Documenting only coding style'], correct: 1, explanation: 'They preserve the “why” behind structural choices.' },
          { q: 'When a major architectural change is proposed, the first step should be:', options: ['Implement immediately in production', 'Impact assessment under change control, including effects on existing validation evidence', 'Delete old documentation', 'Ignore risk because architecture is invisible'], correct: 1, explanation: 'Change control and impact assessment protect the validated state.' }
        ]
      }
    },
    {
      id: 'm5',
      title: 'Networking for Pharma IT',
      level: 'Advanced',
      xpReward: 200,
      description: 'Core networking (Cisco-inspired) applied to regulated environments.',
      lessons: [
        {
          id: 'm5-l1',
          title: 'Fundamentals & Hierarchical Design',
          duration: '13 min',
          content: '<h2>Why networking matters in GxP</h2><p>Systems communicate across labs, manufacturing, quality and cloud. Failures or breaches affect data integrity, release timelines and safety.</p><h2>Building blocks</h2><p><strong>Switches</strong> (L2, MAC), <strong>Routers</strong> (L3, IP), <strong>Firewalls/NGFW</strong>, Wireless controllers/APs. Hierarchical design: Access (end devices) → Distribution (policy, VLAN routing) → Core (high-speed backbone). Collapsed-core and spine-leaf variants are common.</p><div class="key-box">Network infrastructure is typically GAMP Cat 1 and <strong>qualified</strong>. Segmentation (VLANs, VRFs, firewalls) protects GxP systems. Changes under change control.</div><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=u8AYAr0Fus8" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/u8AYAr0Fus8/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">Network Fundamentals Explained: CCNA Basics (Learn with Cisco)</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html" target="_blank" rel="noopener noreferrer">Cisco — networking fundamentals resources</a></div>'
        },
        {
          id: 'm5-l2',
          title: 'Segmentation, Qualification & OT/IT',
          duration: '12 min',
          content: '<h2>Segmentation</h2><p>Separate zones for OT/manufacturing, laboratory, quality, office. Firewalls with allow-lists, jump hosts, no direct internet for GxP servers.</p><h2>Qualification activities</h2><p>Topology &amp; addressing documentation, install verification (firmware, config), critical-path and failover tests, NTP time synchronisation (essential for audit-trail integrity), configuration backup &amp; restore tests, change control.</p><h2>OT considerations</h2><p>Manufacturing/lab networks prioritise determinism, low latency, long device lifecycles and specialised protocols. Careful OT–IT interface design is required for both security and validation boundaries.</p><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=5_V02NkMjYQ" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/5_V02NkMjYQ/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">Free CCNA – Network Fundamentals overview</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://www.cisco.com/c/en/us/td/docs/cloud-systems-management/network-automation-and-management/catalyst-center/cisco-validated-solution-profiles/validated-profile-healthcare_vertical.html" target="_blank" rel="noopener noreferrer">Cisco Validated Profile — Healthcare networking context</a></div>'
        }
      ],
      quiz: {
        id: 'm5-quiz',
        title: 'Networking Quiz',
        passScore: 70,
        xpReward: 130,
        questions: [
          { q: 'End devices typically connect at the:', options: ['Core', 'Distribution', 'Access layer', 'Cloud layer'], correct: 2, explanation: 'Access layer is where end devices attach.' },
          { q: 'Network infrastructure in GxP is most often:', options: ['Cat 5 full validation', 'Cat 1 – qualified', 'Uncontrolled', 'Wireless only'], correct: 1, explanation: 'Infrastructure is qualified as Cat 1.' },
          { q: 'NTP time sync is critical because:', options: ['Improves Wi-Fi', 'Audit trails rely on trustworthy timestamps (ALCOA+, Part 11)', 'Only for finance', 'Regulators ignore time'], correct: 1, explanation: 'Timestamps support Contemporaneous and Attributable.' },
          { q: 'A key security practice is:', options: ['Public internet for all servers', 'Network segmentation to protect regulated systems', 'Wireless only', 'Disable logging'], correct: 1, explanation: 'Segmentation limits lateral movement and exposure.' },
          { q: 'OT networks often prioritise:', options: ['Max internet bandwidth', 'Determinism, low latency, long support lifecycles', 'Monthly OS upgrades', 'Consumer Wi-Fi'], correct: 1, explanation: 'Predictability and stability matter most in OT.' }
        ]
      }
    },
    {
      id: 'm_its',
      title: 'IT Structures, Functions & Enterprise Architecture',
      level: 'Advanced',
      xpReward: 210,
      description: 'How IT is organised in pharma/healthcare, service functions, and enterprise architecture views that support GxP.',
      lessons: [
        {
          id: 'm_its-l1',
          title: 'IT Organisation & Functions in Regulated Companies',
          duration: '13 min',
          content: '<h2>Typical IT functions that intersect GxP</h2><ul><li><strong>Infrastructure &amp; Operations</strong> – servers, networks, cloud platforms, monitoring, backup (often Cat 1 qualification owners)</li><li><strong>Application support / business systems</strong> – LIMS, MES, ERP, eQMS support and configuration</li><li><strong>Security / Cyber</strong> – identity, access, vulnerability management, incident response</li><li><strong>Service management</strong> – incident, problem, change, request (often ITIL-aligned)</li><li><strong>Architecture &amp; strategy</strong> – enterprise and solution architecture, standards, roadmaps</li><li><strong>Data &amp; analytics</strong> – data platforms, governance, reporting that may carry GxP impact</li></ul><h2>Partnership with Quality</h2><p>IT does not own the Quality System, but it is a critical partner. Clear RACI for validation deliverables, change control participation, deviation investigation support and inspection readiness is essential. Many organisations embed “QA IT” or “CSV” specialists who bridge the two worlds.</p><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=kp0yhrTKgg4" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/kp0yhrTKgg4/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">TOGAF in 12 Minutes: What you need to know</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition" target="_blank" rel="noopener noreferrer">ISPE GAMP 5 — supplier & service provider emphasis</a></div>'
        },
        {
          id: 'm_its-l2',
          title: 'Enterprise Architecture Views for Pharma',
          duration: '14 min',
          content: '<h2>Why enterprise architecture (EA) helps</h2><p>EA provides shared models of business capabilities, application landscape, data flows and technology platforms. In a regulated company these models support:</p><ul><li>Impact analysis when systems change or are retired</li><li>Identification of GxP-relevant applications and data stores</li><li>Rationalisation of overlapping systems and shadow IT</li><li>Planning of integration and data-integrity controls</li><li>Cloud and vendor strategy aligned with compliance needs</li></ul><h2>Practical views</h2><p>Common useful views (inspired by TOGAF and similar frameworks, applied pragmatically):</p><ul><li>Business capability / process map highlighting GxP processes</li><li>Application portfolio with GxP impact and GAMP category indicators</li><li>Data architecture / critical data flows</li><li>Technology platform and infrastructure standards</li><li>Integration landscape</li></ul><div class="key-box">Keep EA lightweight and living. Heavyweight ivory-tower models that no one maintains lose value quickly.</div><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=MuG5JGi2CZo" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/MuG5JGi2CZo/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">Introduction to Enterprise Architecture (The Open Group related material)</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://www.opengroup.org/togaf" target="_blank" rel="noopener noreferrer">The Open Group — TOGAF overview</a></div>'
        },
        {
          id: 'm_its-l3',
          title: 'Service Management, SLAs & Supplier Interfaces',
          duration: '12 min',
          content: '<h2>IT Service Management in a GxP context</h2><p>Incident, problem and change processes must be designed so that GxP impact is recognised and escalated. A “standard” ITIL change may still require Quality involvement if it touches a validated system or regulated data path.</p><h2>SLAs / OLAs and Quality agreements</h2><p>For internal IT and external suppliers (including cloud and SaaS), define expectations for availability, support, change notification, audit rights and data handling. Annex 11 and GAMP expect formal assessment and agreements with service providers that affect GxP systems.</p><h2>Inspection readiness</h2><p>IT must be able to produce evidence of infrastructure qualification, change history, access reviews, backup/restore tests and security controls when inspectors ask. Architecture diagrams, configuration baselines and service records become part of the compliance story.</p><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=dcjJY31Qaio" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/dcjJY31Qaio/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">TOGAF vs other EA frameworks (quick comparison)</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://www.gmp-compliance.org/files/guidemgr/annex11_01-2011_en.pdf" target="_blank" rel="noopener noreferrer">EU GMP Annex 11 (service providers / agreements)</a></div>'
        }
      ],
      quiz: {
        id: 'm_its-quiz',
        title: 'IT Structures & EA Quiz',
        passScore: 70,
        xpReward: 135,
        questions: [
          { q: 'A key reason IT must partner closely with Quality is:', options: ['IT owns the entire Quality System', 'Many IT systems and changes have GxP impact and require coordinated validation and change control', 'Quality never needs IT evidence', 'Only for networking'], correct: 1, explanation: 'GxP impact creates shared responsibility.' },
          { q: 'Enterprise architecture helps regulated companies mainly by:', options: ['Replacing validation', 'Providing shared models for impact analysis, GxP system identification and integration planning', 'Eliminating the need for SOPs', 'Documenting only hardware serial numbers'], correct: 1, explanation: 'EA supports impact analysis and landscape clarity.' },
          { q: 'When an IT change touches a validated system, the change process should:', options: ['Treat it as a pure infrastructure ticket with no Quality involvement', 'Recognise GxP impact and involve appropriate Quality / validation assessment', 'Be hidden from auditors', 'Always be an emergency change'], correct: 1, explanation: 'GxP impact triggers Quality involvement.' },
          { q: 'Service provider agreements for GxP-relevant services should typically address:', options: ['Only price', 'Availability, change notification, audit rights, data handling and support expectations', 'Only marketing claims', 'Nothing formal'], correct: 1, explanation: 'Annex 11 / GAMP expect formal agreements and assessment.' },
          { q: 'A practical application portfolio view in pharma often includes:', options: ['Only office productivity tools', 'GxP impact indicators and GAMP category hints for each significant application', 'Only cloud costs', 'Employee birthdays'], correct: 1, explanation: 'Impact and category inform assurance effort.' }
        ]
      }
    },
    {
      id: 'm6',
      title: 'Cloud Computing in GxP',
      level: 'Expert',
      xpReward: 250,
      description: 'Shared responsibility, platform qualification and practical cloud patterns.',
      lessons: [
        {
          id: 'm6-l1',
          title: 'Shared Responsibility & Supplier Assurance',
          duration: '13 min',
          content: '<h2>Shared responsibility</h2><p>Provider: security <em>of</em> the cloud (physical, hypervisor, foundation services). Customer: security <em>in</em> the cloud (identity, data, app config, network controls, application validation).</p><h2>Supplier assessment</h2><p>Still required (Annex 11, GAMP). For hyperscalers review SOC 2, ISO 27001/27017, GxP whitepapers/compliance packages, shared-responsibility matrices, contracts (DPA, audit rights, change notification). Leverage provider evidence after assessment – aligned with GAMP principles.</p><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=cLWRX5VzXJI" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/cLWRX5VzXJI/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">GxP Compliance context with cloud platforms (shared responsibility discussion)</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://aws.amazon.com/blogs/industries/automating-gxp-compliance-in-the-cloud-best-practices-and-architecture-guidelines/" target="_blank" rel="noopener noreferrer">AWS — GxP systems on AWS (whitepaper landing)</a><a href="https://learn.microsoft.com/en-us/azure/compliance/offerings/offering-gxp" target="_blank" rel="noopener noreferrer">Microsoft Azure GxP offering notes</a></div>'
        },
        {
          id: 'm6-l2',
          title: 'IaaS / PaaS / SaaS & Continuous Change',
          duration: '13 min',
          content: '<h2>Service models</h2><p><strong>IaaS:</strong> you control VMs/network/storage; still perform configuration IQ (often via IaC). <strong>PaaS:</strong> more managed; focus on config, identity, data and app validation. <strong>SaaS:</strong> concentrate on supplier assessment, configuration, integrations, process PQ, data residency, exit strategy and audit-trail access.</p><h2>Continuous platform evolution</h2><p>Traditional freeze-and-revalidate does not scale. Use risk-based evaluation of provider changes, automated testing/monitoring, contractual notification/rollback, Infrastructure-as-Code and policy-as-code for controlled deployments.</p><h2>Common patterns</h2><p>Dedicated regulated accounts, private networking, strict IAM + MFA, comprehensive protected logging, encryption (customer-managed keys where needed), immutable/WORM options, tested backup/DR with defined RTO/RPO. Document risk-based architecture decisions.</p><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=cLWRX5VzXJI" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/cLWRX5VzXJI/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">GxP / cloud & data integrity considerations (AWS-oriented discussion material)</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://aws.amazon.com/blogs/industries/automating-gxp-compliance-in-the-cloud-best-practices-and-architecture-guidelines/" target="_blank" rel="noopener noreferrer">AWS GxP compliance in the cloud</a></div>'
        }
      ],
      quiz: {
        id: 'm6-quiz',
        title: 'Cloud GxP Quiz',
        passScore: 70,
        xpReward: 150,
        questions: [
          { q: 'Customer responsibility in the shared model includes:', options: ['Physical data-centre security', 'Data, identity, app config and network controls in the cloud', 'Hypervisor patching on multi-tenant hosts', 'Nothing'], correct: 1, explanation: 'Customers own what they configure and put in the cloud.' },
          { q: 'Practical hyperscaler qualification usually includes:', options: ['Rebuilding data-centre docs from scratch', 'Supplier assessment + SOC/ISO/GxP packages + risk-based config & app validation', 'Ignore large providers', 'UI testing only'], correct: 1, explanation: 'Leverage provider evidence after assessment.' },
          { q: 'Cloud continuous change requires:', options: ['Never change anything', 'Risk-based evaluation, often automated, rather than full re-validation every time', 'Abandon cloud', 'No audit trails'], correct: 1, explanation: 'Controls must adapt while preserving validated state.' },
          { q: 'SaaS validation effort focuses on:', options: ['Rewriting application code', 'Supplier assessment, configuration, integrations, process performance and data controls', 'Physical server install only', 'Disabling e-signatures'], correct: 1, explanation: 'Shift toward config, process fit and oversight.' },
          { q: 'Private networking + strict identity primarily support:', options: ['Public downloads', 'Data integrity, confidentiality and authorised access (ALCOA+, Part 11/Annex 11)', 'Gaming latency', 'No need for backup'], correct: 1, explanation: 'Protect regulated data and records.' }
        ]
      }
    },
    {
      id: 'm7',
      title: 'Security, Part 11 & Annex 11',
      level: 'Expert',
      xpReward: 230,
      description: 'Electronic records, signatures, audit trails, access control and cybersecurity.',
      lessons: [
        {
          id: 'm7-l1',
          title: 'Part 11 & Annex 11 Core Controls',
          duration: '14 min',
          content: '<h2>Part 11 technical expectations (closed systems)</h2><p>Validation for accuracy/reliability/consistent performance and ability to discern invalid/altered records; accurate complete copies; record protection for retrieval; limited access; secure computer-generated time-stamped audit trails; operational/authority/device checks; training; policies for accountability and e-signatures.</p><h2>Annex 11</h2><p>Risk management, supplier assessment, lifecycle validation, data integrity, security, audit trails, change control, periodic evaluation, electronic signatures and printouts.</p><div class="key-box">Goal: electronic records and signatures as trustworthy as paper. Technical + procedural controls together.</div><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=AfCSrIN-QQs" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/AfCSrIN-QQs/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">Your Ultimate Guide to 21 CFR Part 11 | Electronic Records & Signatures</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/data-integrity-and-compliance-drug-cgmp-questions-and-answers" target="_blank" rel="noopener noreferrer">FDA Data Integrity & CGMP Q&A (Part 11 context)</a><a href="https://www.gmp-compliance.org/files/guidemgr/annex11_01-2011_en.pdf" target="_blank" rel="noopener noreferrer">EU GMP Annex 11</a></div>'
        },
        {
          id: 'm7-l2',
          title: 'Audit Trails, Access & Cybersecurity',
          duration: '12 min',
          content: '<h2>Audit trails</h2><p>Secure, computer-generated, time-stamped; record who/what/when for create/modify/delete actions; retained and reviewable; users cannot disable or alter them.</p><h2>Access control</h2><p>Unique identities, role-based least privilege, strong authentication (MFA increasingly expected), periodic access reviews, prompt removal on role change/departure.</p><h2>Cybersecurity</h2><p>Patching under change control, segmentation, endpoint protection, vulnerability management, incident response that considers regulated data, awareness training. Security is integral to maintaining the validated state.</p><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=YAaNCk5euq0" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/YAaNCk5euq0/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">21 CFR Part 11 Compliance overview & common pitfalls</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/data-integrity-and-compliance-drug-cgmp-questions-and-answers" target="_blank" rel="noopener noreferrer">FDA Data Integrity guidance</a></div>'
        }
      ],
      quiz: {
        id: 'm7-quiz',
        title: 'Security & Part 11 Quiz',
        passScore: 70,
        xpReward: 140,
        questions: [
          { q: 'Secure time-stamped audit trails primarily support:', options: ['Faster performance', 'Reconstructing who did what when (ALCOA+, Part 11/Annex 11)', 'Lower storage cost', 'Financial audit only'], correct: 1, explanation: 'They provide attributable and contemporaneous evidence.' },
          { q: 'Limiting access to authorised individuals is required by:', options: ['Only ISO 27001', 'Part 11 and Annex 11 (among others)', 'Only Cat 5', 'Optional'], correct: 1, explanation: 'Both frameworks explicitly require access controls.' },
          { q: 'Users must not be able to disable the audit trail because:', options: ['Performance', 'Otherwise integrity/completeness of the change record cannot be assured', 'Cosmetic only', 'Never reviewed'], correct: 1, explanation: 'An alterable trail loses evidentiary value.' },
          { q: 'Part 11 electronic signatures must be:', options: ['Optional always', 'Unique, verifiable and linked to their records', 'Shared for efficiency', 'Only on paper'], correct: 1, explanation: 'Specific uniqueness, integrity and linking requirements apply.' },
          { q: 'GxP system patching should be:', options: ['Never done', 'Under change control with impact assessment and testing', 'Provider-only with no customer role', 'Undocumented'], correct: 1, explanation: 'Necessary for security yet must preserve validated state.' }
        ]
      }
    },
    {
      id: 'm8',
      title: 'Capstone & Real-World Integration',
      level: 'Pro',
      xpReward: 300,
      description: 'Integrate knowledge and evaluate readiness for real GxP IT/validation roles.',
      lessons: [
        {
          id: 'm8-l1',
          title: 'Integrated Lifecycle Story – New LIMS',
          duration: '16 min',
          content: '<h2>Scenario walk-through</h2><ol><li>Impact assessment → high (batch-release data).</li><li>Category → Cat 4 configured + possible Cat 5 interfaces.</li><li>Supplier assessment of vendor quality system and Part 11/Annex 11 claims.</li><li>Risk assessment focused on critical workflows and interfaces.</li><li>URS + configuration specification.</li><li>Infrastructure/platform qualification (on-prem or cloud) + network path.</li><li>IQ / OQ / PQ (or equivalent) covering critical processes with real users/data patterns.</li><li>Data-integrity controls: unique users, audit trails, e-signatures, backup/restore, ALCOA+ checks.</li><li>Go-live: training, SOPs, change control, periodic review.</li><li>Retirement planning for long-term data retention.</li></ol><div class="key-box success">GAMP, ALCOA+, Part 11/Annex 11, networking/cloud, development processes, architecture and CSV activities interlock. No activity stands alone.</div><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=yRSwc0bf4hU" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/yRSwc0bf4hU/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">CSV lifecycle & integration mindset (complete lifecycle approach)</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition" target="_blank" rel="noopener noreferrer">ISPE GAMP 5 Guide, 2nd Edition</a><a href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/data-integrity-and-compliance-drug-cgmp-questions-and-answers" target="_blank" rel="noopener noreferrer">FDA Data Integrity Q&A</a></div>'
        },
        {
          id: 'm8-l2',
          title: 'Evaluating Real-World Level',
          duration: '10 min',
          content: '<h2>Virtual vs practical competence</h2><p>This academy measures knowledge. Real readiness also needs hands-on experience with URS/risk assessments/test scripts/reports, change-control boards, deviations, inspections, your company’s Quality System, and communication with QA, manufacturing and laboratory stakeholders.</p><h2>Next steps</h2><ul><li>Study official GAMP 5 2nd Ed and relevant Good Practice Guides.</li><li>Read current FDA Data Integrity guidance, Annex 11, PIC/S documents.</li><li>Deepen technical skills via Cisco fundamentals, architecture patterns or cloud-provider GxP materials.</li><li>Seek mentoring or rotational experience in validation / QA-IT / infrastructure / solution architecture.</li><li>Consider recognised formal training while remembering competence is demonstrated on the job.</li></ul><p>Keep critical thinking alive. Always prioritise patient safety, product quality and data integrity.</p><div class="key-box" style="margin-top:1.5rem"><strong>📺 Recommended video</strong><a href="https://www.youtube.com/watch?v=lji7us6-rqg" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:0.75rem;text-decoration:none;color:inherit"><img src="https://img.youtube.com/vi/lji7us6-rqg/hqdefault.jpg" alt="Video thumbnail" style="width:100%;max-width:320px;border-radius:8px;border:1px solid var(--border);display:block;margin-bottom:0.5rem" loading="lazy" referrerpolicy="no-referrer"><span style="color:var(--accent);font-weight:600">GAMP 5 critical thinking & modern practice (ISPE Singapore session)</span></a><div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.35rem">(opens on YouTube – requires internet)</div></div><div class="further-reading"><h3>Further reading</h3><a href="https://ispe.org/GAMP-Training" target="_blank" rel="noopener noreferrer">ISPE GAMP training & guidance hub</a></div>'
        }
      ],
      quiz: {
        id: 'm8-quiz',
        title: 'Capstone Integration Exam',
        passScore: 80,
        xpReward: 200,
        questions: [
          { q: 'A configured LIMS with custom interfaces should be treated as:', options: ['Ignore custom parts', 'Continuum – risk-based effort on both configuration and custom GxP elements', 'IQ only', 'Skip supplier assessment'], correct: 1, explanation: 'Categories are a continuum; risk and novelty drive depth.' },
          { q: 'A firewall change affecting a validated MES requires:', options: ['Network team only, no docs', 'Change control with impact assessment and verification', 'Wait years for full re-validation', 'Disable MES without records'], correct: 1, explanation: 'Infrastructure changes that can affect GxP systems need formal control.' },
          { q: 'The most important outcome of GxP system activities is:', options: ['Largest possible package', 'Documented risk-based assurance of fitness for intended use protecting safety, quality and data integrity', 'Newest technology only', 'Zero human involvement'], correct: 1, explanation: 'Critical thinking and patient-centric assurance are central.' },
          { q: 'When a cloud provider announces a change, the company should:', options: ['Abandon cloud', 'Evaluate under change/risk process, leverage provider info, test where risk warrants', 'Ignore – provider owns everything', 'Re-validate everything from scratch every time'], correct: 1, explanation: 'Risk-based evaluation is the practical approach.' },
          { q: 'ALCOA+, GAMP, development processes, architecture, Part 11 controls and segmentation are best seen as:', options: ['Independent silos', 'Interlocking elements of a coherent system protecting regulated data and processes', 'Only for paper', 'Optional for small companies'], correct: 1, explanation: 'Understanding the relationships marks professional competence.' }
        ]
      }
    }
  ],

  achievements: [
    { id: 'first-lesson', title: 'First Steps', description: 'Complete your first lesson', icon: '01', condition: (s) => s.completedLessons.length >= 1 },
    { id: 'alcoa-master', title: 'ALCOA+ Guardian', description: 'Complete Data Integrity module + pass quiz', icon: 'DI', condition: (s) => s.completedModules.includes('m2') && (s.quizScores['m2-quiz'] || 0) >= 70 },
    { id: 'gamp-guru', title: 'GAMP Guru', description: 'Complete GAMP 5 module + pass quiz', icon: 'G5', condition: (s) => s.completedModules.includes('m3') && (s.quizScores['m3-quiz'] || 0) >= 70 },
    { id: 'sdp-craftsman', title: 'SDLC Craftsman', description: 'Complete Software Development Processes module + pass quiz', icon: 'SD', condition: (s) => s.completedModules.includes('m_sdp') && (s.quizScores['m_sdp-quiz'] || 0) >= 70 },
    { id: 'csv-proficient', title: 'CSV Practitioner', description: 'Complete CSV module + pass quiz', icon: 'CV', condition: (s) => s.completedModules.includes('m4') && (s.quizScores['m4-quiz'] || 0) >= 70 },
    { id: 'arch-architect', title: 'GxP Architect', description: 'Complete Architecture & Design module + pass quiz', icon: 'AR', condition: (s) => s.completedModules.includes('m_arch') && (s.quizScores['m_arch-quiz'] || 0) >= 70 },
    { id: 'network-ninja', title: 'Network Ninja', description: 'Complete Networking module + pass quiz', icon: 'NW', condition: (s) => s.completedModules.includes('m5') && (s.quizScores['m5-quiz'] || 0) >= 70 },
    { id: 'its-strategist', title: 'IT Strategist', description: 'Complete IT Structures & EA module + pass quiz', icon: 'IT', condition: (s) => s.completedModules.includes('m_its') && (s.quizScores['m_its-quiz'] || 0) >= 70 },
    { id: 'cloud-commander', title: 'Cloud Commander', description: 'Complete Cloud module + pass quiz', icon: 'CL', condition: (s) => s.completedModules.includes('m6') && (s.quizScores['m6-quiz'] || 0) >= 70 },
    { id: 'security-sentinel', title: 'Security Sentinel', description: 'Complete Security module + pass quiz', icon: 'SE', condition: (s) => s.completedModules.includes('m7') && (s.quizScores['m7-quiz'] || 0) >= 70 },
    { id: 'capstone-champion', title: 'Capstone Champion', description: 'Pass Capstone Exam (≥80%)', icon: 'CA', condition: (s) => (s.quizScores['m8-quiz'] || 0) >= 80 },
    { id: 'xp-1000', title: 'Knowledge Seeker', description: 'Reach 1,000 XP', icon: '1K', condition: (s) => s.xp >= 1000 },
    { id: 'xp-5000', title: 'Domain Expert', description: 'Reach 5,000 XP', icon: '5K', condition: (s) => s.xp >= 5000 },
    { id: 'all-modules', title: 'Full Spectrum', description: 'Complete all 11 modules', icon: 'FS', condition: (s) => s.completedModules.length >= 11 },
    { id: 'perfect-quiz', title: 'Perfect Score', description: 'Score 100% on any quiz', icon: '100', condition: (s) => Object.values(s.quizScores || {}).some(v => v === 100) },
    { id: 'streak-3', title: 'Consistent Learner', description: 'Activity on 3 different days', icon: '3D', condition: (s) => (s.activityDays || []).length >= 3 }
  ],

  levels: [
    { name: 'Beginner', minXp: 0, maxXp: 999, color: '#94a3b8' },
    { name: 'Intermediate', minXp: 1000, maxXp: 2499, color: '#0ea5e9' },
    { name: 'Advanced', minXp: 2500, maxXp: 4999, color: '#8b5cf6' },
    { name: 'Expert', minXp: 5000, maxXp: 9999, color: '#f59e0b' },
    { name: 'Pro', minXp: 10000, maxXp: Infinity, color: '#10b981' }
  ]
};
