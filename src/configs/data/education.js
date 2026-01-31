import { FaGraduationCap, FaSchool, FaBook } from 'react-icons/fa';

export const EDUCATION_DATA = [
  {
    id: "b2_cert",
    degree: "TELC Deutsch B2 Zertifikat",
    school: "Sprachakademie / Goethe-Institut Partner",
    year: "2025",
    description: "Nachweis über fortgeschrittene Deutschkenntnisse für den klinischen Bereich.",
    icon: FaBook
  },
  {
    id: "nursing_diploma",
    degree: "Staatliches Diplom: Krankenpflege (Infirmier Polyvalent)",
    school: "ISPITS (Institut Supérieur des Professions Infirmières)",
    year: "2021 - 2024",
    description: "Spezialisierung in allgemeiner Krankenpflege und medizinischer Versorgung.",
    icon: FaGraduationCap
  },
  {
    id: "bac",
    degree: "Baccalauréat (Abitur) - Sciences Physiques",
    school: "Lycée Qualifiant, Fes",
    year: "2021",
    description: "Allgemeine Hochschulreife mit Schwerpunkt Naturwissenschaften.",
    icon: FaSchool
  }
];