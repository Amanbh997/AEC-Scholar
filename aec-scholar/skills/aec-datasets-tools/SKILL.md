---
name: aec-datasets-tools
description: >-
  Reference to open datasets, benchmarks, and research software/tools commonly used in AEC studies — energy
  simulation (EnergyPlus, OpenStudio, Modelica), BIM/IFC tooling (IfcOpenShell, Speckle), computer-vision &
  point-cloud benchmarks, structural/FEM, computational design (Grasshopper/Dynamo), bibliometrics, stats,
  and qualitative-analysis software. Use when the user needs to choose a tool, find a dataset/benchmark, set
  up an analysis pipeline, or cite the software/data they used.
---

# AEC Research Datasets & Tools — Reference

Point researchers to credible tools and (where they exist) open datasets/benchmarks, and remind them to
**cite software and data** (version + DOI) and to **verify licenses and current availability** before use.

## 1. Building energy & performance
- **EnergyPlus** (DOE) — whole-building energy simulation (the research standard); **OpenStudio** SDK/GUI;
  **EnergyPlus + Python (eppy, pyenergyplus), `besos`, `eppy`** for parametric runs.
- **Modelica** ecosystem — **Buildings library (LBNL)**, **Spawn-of-EnergyPlus**, Dymola/OpenModelica.
- **Ladybug Tools** (Ladybug/Honeybee/Butterfly) in **Grasshopper** — daylight (Radiance), energy, CFD.
- **Radiance** — daylight/glare; **CONTAM** — airflow/IAQ; **OpenFOAM** — CFD (ventilation, urban microclimate).
- **TRNSYS, IDA ICE, IES-VE, DesignBuilder** — common (mostly commercial) BES tools.
- **Weather data:** EnergyPlus/EPW files (climate.onebuilding.org), TMY3; **UBEM:** UMI, CityEnergyAnalyst (CEA).
- **Open datasets/benchmarks:** ASHRAE Great Energy Predictor III (Kaggle), Building Data Genome Project 1/2,
  the DOE Commercial/Residential Prototype Building Models, and NREL ResStock/ComStock (verify current terms).

## 2. BIM / openBIM / interoperability
- **IfcOpenShell** (Python/C++) — parse, query, geometry from IFC; **BlenderBIM/Bonsai** — open BIM authoring.
- **xBIM Toolkit** (.NET), **IFC.js / web-ifc / That Open Engine** — IFC in the browser.
- **Speckle** — open data hub / interoperability across AEC tools; **Solibri** — model checking (commercial).
- **buildingSMART** resources: IFC schema, IDS samples, bSDD; **Linked Building Data:** IFCtoLBD, BOT ontology.
- **Datasets:** IFC sample files (buildingSMART, KIT IFC examples). Curated open BIM datasets are scarce —
  note this limitation; many studies build their own.

## 3. Computer vision, point clouds & ML in construction
- **Point clouds:** PDAL, Open3D, CloudCompare, PCL; **photogrammetry/SLAM:** COLMAP, Meshroom.
- **Benchmarks/datasets:** S3DIS, ScanNet, Semantic3D, KITTI (general 3D/segmentation); **construction-
  specific:** SODA / MOCS / ACID (site object/worker detection), Structured3D, building-defect crack
  datasets (e.g. SDNET2018, METU concrete crack) — **verify licenses & current links**, and report dataset
  size/splits honestly (AEC ML datasets are often small/narrow).
- **ML frameworks:** PyTorch, TensorFlow/Keras, scikit-learn, Ultralytics YOLO; **GNN:** PyTorch Geometric/DGL.

## 4. Structural / FEM / SHM
- **OpenSees** (earthquake/structural simulation, open), **Code_Aster**, **CalculiX**, **FEniCS/FreeFEM**
  (open FEM); **Abaqus/ANSYS** (commercial). SHM datasets: Los Alamos (LANL) benchmark, Z24 bridge,
  community SHM repositories (verify).

## 5. Computational & generative design
- **Grasshopper/Rhino** (+ Galapagos, Wallacei, Opossum, Octopus for optimization), **Dynamo/Revit**,
  **Rhino.Compute**, **COMPAS** (open Python framework for AEC research), **OpenSCAD/CadQuery** (code CAD).

## 6. Construction management / simulation / decision
- **DES:** SimPy (Python), AnyLogic (also ABM), Arena; **ABM:** NetLogo, Mesa (Python), Repast.
- **Scheduling/optimization:** Python `pulp`/`OR-Tools`, `pymoo` (multi-objective), `DEAP`, `Platypus`.
- **MCDM:** R `MCDA`/`topsis`, Python `pymcdm`, `pyDecision`; **AHP** spreadsheets/`ahpy`.

## 7. Bibliometrics, statistics & qualitative analysis
- **Bibliometrics/science mapping:** VOSviewer, CiteSpace, **Bibliometrix/biblioshiny (R)**, OpenAlex/pyalex,
  litstudy, Gephi (see `bibliometric-analysis`).
- **Statistics:** R (tidyverse, `lavaan`/`semTools` for SEM, `psych`), Python (pandas, statsmodels, pingouin),
  **SmartPLS** / `seminr` (R) / `plspm` for PLS-SEM, JASP/jamovi (free GUI), SPSS/Stata (commercial).
- **Qualitative:** NVivo, ATLAS.ti, MAXQDA, Dedoose, Taguette (open), QualCoder (open).
- **Reference managers:** Zotero (open), Mendeley, EndNote (see `citation-formats`).
- **Reproducibility:** Jupyter, Quarto/R Markdown, `renv`/`conda`/`venv`, Git, Docker, Binder.

## 8. Citing software & data (do this)
- Cite the **version** and a **DOI** where available (Zenodo archives releases; many tools have a "how to
  cite" / CITATION.cff). Treat as `@misc`/software in BibTeX (see `citation-formats`).
- For datasets: cite author/provider, title, version, year, repository, DOI, and **access date**; state the
  **license** and any usage restrictions.

## 9. Cautions
- **Verify availability & licenses** — links and terms change; some "open" datasets restrict commercial/
  redistribution use.
- **Report dataset provenance, size, and splits** — small, single-source AEC datasets undermine
  generalizability; say so.
- **Pin versions** (software + libraries + weather files) for reproducibility; differences change results.
- Prefer open, scriptable tools for reproducible pipelines; if using commercial tools, document settings
  thoroughly so others can replicate the workflow.
