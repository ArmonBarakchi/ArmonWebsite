// src/components/LineBot.js
import React from "react";
import "./ProjectPage.css";

const E6 = () => {
  return (
    <div className="project-page">
      <div className="project-container">
        <div className="project-text">
          <h1>Effects of Human Papilloma Virus E6/E7 Oncoproteins on Genomic Structure in Head and Neck Squamous Cell Carcinoma</h1>


          <section className="project-section">
            <h2>Overview</h2>
            <p>
              This study investigates the impact of HPV E6 and E7 oncoproteins on the genomic
              structure of Head and Neck Squamous Cell Carcinoma (HNSCC). By analyzing
              RNA-sequencing data from HPV-positive HNSCC patients, we found
              that high expression levels of E6 and E7 are associated with an increased
              number of point mutations, particularly on chromosomes 1, 11, and 17.
              Additionally, elevated E6 and E7 expression correlated with more frequent
              non-clustered structural variations and reduced copy number repeats, which
              are linked to decreased gene expression. We also observed that high
              E6 and E7 expression is associated with increased activity in oncogenic and
              telomeric pathways, suggesting a significant role of these oncoproteins in
              HNSCC pathogenesis.
            </p>
          </section>

          <section className="project-section">
            <h2>What I Dids</h2>
            <p>
              For this study, I obtained RNA-sequencing and genomic data from The Cancer Genome Atlas (TCGA) for
              HPV-positive head and neck squamous cell carcinoma (HNSCC) patients. Samples were stratified based on
              expression levels of the viral oncoproteins E6 and E7, which are known to drive tumorigenesis in
              HPV-associated cancers. Clinical metadata including tumor site, stage, and patient demographics were also
              collected to contextualize downstream analysis.
            </p>

            <p>
              To assess how E6 and E7 oncoprotein expression impacts genomic integrity, I first categorized patients
              into low and high E6/E7 expression groups using median expression thresholds. I then analyzed the
              prevalence of point mutations across the genome and identified significantly mutated chromosomes using
              chi-squared analysis. Chromosomes 1, 11, and 17 exhibited a disproportionate number of mutations in
              patients with high E6/E7 expression.
            </p>

            <p>
              Next, I assessed larger-scale genomic alterations by quantifying structural variations, copy number
              repeats, and associated gene expression changes. Patients with high E6 and E7 expression exhibited more
              frequent non-clustered structural variations and a reduction in copy number repeats. These copy number
              losses corresponded with downregulation of nearby genes, suggesting a regulatory impact of genomic
              instability. Finally, I performed pathway enrichment analysis on the affected gene sets, revealing
              upregulation of telomeric maintenance and oncogenic signaling pathways in the high E6/E7 group.
            </p>

          </section>

          <section className="project-section">
            <h2>Tech Stack</h2>
            <ul>
              <li>R Studio</li>
              <li>Excel</li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Read the Paper</h2>
            <a
                className="github-button"
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9777059/"
                target="_blank"
                rel="noopener noreferrer"
            >
              View on Pubmed →
            </a>
          </section>
        </div>

      </div>
    </div>
  );
};

export default E6;
