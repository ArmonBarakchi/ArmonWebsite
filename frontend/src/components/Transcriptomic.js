// src/components/LineBot.js
import React from "react";
import "./ProjectPage.css";

const Transcriptomic = () => {
  return (
    <div className="project-page">
      <div className="project-container">
        <div className="project-text">
          <h1>Transcriptomic Analysis Reveals Dysregulation of the Mycobiome and Archaeome and Distinct Oncogenic Characteristics according to Subtype and Gender in Papillary Thyroid Carcinoma</h1>


          <section className="project-section">
            <h2>Overview</h2>
            <p>
              This published study aimed to explore the role of fungal and archaeal microbes—collectively
              referred to as the mycobiome and archaeome—in the development and progression of
              Papillary Thyroid Carcinoma (PTC). Using RNA-sequencing data from The Cancer
              Genome Atlas (TCGA), we analyzed microbial composition in tumor
              samples across the three major PTC subtypes: Classical (CPTC),
              Follicular Variant (FVPTC), and Tall Cell (TCPTC), as well as by gender
              and BRAF V600E mutation status. The analysis revealed significant
              dysregulation of both the mycobiome and archaeome in PTC tumors compared
              to normal tissue, with microbial profiles varying distinctly by subtype.
              Notably, female tumor samples exhibited a disproportionate number of
              overabundant fungal species, suggesting a gender-specific microbial
              signature. Furthermore, these microbial shifts were associated with
              differential expression of key oncogenic pathways, indicating that fungi
              and archaea may contribute to tumor biology in a subtype- and gender-specific manner.
              We also identified a panel of fungi uniquely dysregulated in BRAF V600E-positive
              tumors, pointing to a potential link between microbial presence and aggressive genetic
              mutations. Overall, the findings underscore the potential role of non-bacterial microbes
              in thyroid cancer oncogenesis and open the door to new avenues of microbiome-informed
              diagnostics or therapeutics.
            </p>
          </section>

          <section className="project-section">
            <h2>What I Did</h2>
            <p>
              For this study, I obtained RNA-sequencing data from The Cancer Genome Atlas (TCGA), which included 453
              primary papillary thyroid carcinoma (PTC) tumor samples and 54 matched normal thyroid tissue samples.
              These data provided the transcriptomic landscape necessary to investigate the presence and dysregulation
              of fungal and archaeal species in PTC. Sample metadata—including subtype classification (CPTC, FVPTC, and
              TCPTC), gender, and BRAF V600E mutation status—was also collected to support stratified analysis.
            </p>

            <p>
              To extract microbial reads from the RNA-seq data, I used the PathoScope 2.0 framework, a computational
              pipeline designed to assign sequencing reads to microbial genomes with high specificity. This enabled
              accurate quantification of fungal and archaeal species present in each sample. To identify significant
              differences in microbial abundance, I performed Kruskal-Wallis tests to compare microbial profiles across
              PTC subtypes, and Wilcoxon rank-sum tests to assess differences between tumor and normal tissue, as well
              as between male and female patients.
            </p>

            <p>
              To assess the clinical relevance of microbial dysregulation, I performed Cox proportional hazards
              regression to identify microbial species whose abundance correlated with overall patient survival. In
              parallel, I conducted pathway enrichment analysis by integrating host gene expression data with microbial
              profiles, allowing me to identify oncogenic signaling pathways that may be influenced by subtype- or
              gender-specific microbial activity. This comprehensive analysis revealed meaningful relationships between
              the intratumor microbiome and key molecular and clinical features of PTC.
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
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9967748/"
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

export default Transcriptomic;
