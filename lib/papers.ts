// Placeholder data — swap for real papers (or an MDX-backed loader) later.
export type Paper = {
  slug: string;
  title: string;
  authors: string[];
  venue: string;
  summary: string;
  abstract: string;
  reflection: string;
  pdf: string;
  code: string;
  featured: boolean;
};

const PLACEHOLDER_ABSTRACT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const PLACEHOLDER_REFLECTION =
  "A short personal note about this project: what I enjoyed, what surprised me, and what I would do differently. Two or three sentences is plenty.";

export const ME = "Samuel Xie";

const papers: Paper[] = [
  {
    slug: "shap-attribution-sae",
    title: "SHAP as an Attribution Method for SAE Features",
    authors: [ME, "Dr. Noura Al-Moubayed"],
    venue: "IJSCAR 2026 (under review)",
    summary: "A one-line, plain-language summary of what this paper shows.",
    abstract: `Sparse autoencoders decompose language model representations into interpretable features, but feature interpretation in this literature remains predominantly corre lational. Attribution methods offer more direct estimates of feature influence, yet their faithfulness to actual causal effects has not been systematically evaluated in the SAE setting. We apply SHAP-based attribution to SAE latent features and eval uate it against direct causal intervention, using sentiment classification on SST-2 with GPT-2 Small and a 32,768-feature layer-7 SAE as a testbed. We compare SHAP to Integrated Gradients, Gradient×Input, and probe-weight baselines across linear and MLP probe arms, scoring each against feature ablation and activation steering measured through the language model’s own logit difference. Most faith fulness associations we measure do not survive multiple-comparison correction, and attribution methods that agree strongly with one another (ρ = 0.42–0.80) agree poorly with measured causal effects, indicating that inter-method agreement is not evidence of causal faithfulness. Two effects hold under control. First, local per-example attribution retains a directional advantage over global averaged attribu tion, while its apparent importance advantage is explained by feature activity rather than superior causal ranking. Second, under known-ground-truth minimal pairs, attribution recovers inserted sentiment signal well above chance (AUROC 0.792) but fails to localize deletions (AUROC 0.520), suggesting that these methods detect the presence of a feature’s influence more reliably than its absence. We argue that importance faithfulness and directional faithfulness are separable properties requiring separate evaluation, and that attribution agreement should not substitute for causal validation.`,
    reflection: PLACEHOLDER_REFLECTION,
    pdf: "/papers/shap.pdf",
    code: "https://github.com/froge79/shap-sae",
    featured: true,
  },
  {
    slug: "depressive-belief-rigidity",
    title: "Depressive Belief Rigidity in Language Models",
    authors: [ME],
    venue: "IDAP 2026 - proceedings soon",
    summary: "A one-line, plain-language summary of what this paper shows.",
    abstract: `Large-language models (LLMs) struggle with bal anced cognitive restructuring in depressive contexts, a core component of effective depression therapy. In this work, we show that belief rigidity is linearly encoded in LLM internal representations but cannot be guided using contrastive acti vation addition steering to improve cognitive restructuring in depressive contexts. Specifically, we select and label real-world depressive texts for ordinal belief rigidity, and train linear probes on the last-layer token activations of the LLM. To steer the model, we generate matched pairs of high and low belief rigidity depressive texts for contrastive activation addition and evaluate steered therapist-style responses using an LLM as-a-judge pipeline. Probes consistently outperform token count, sentiment, and TF-IDF models, suggesting that belief rigidity is encoded with moderate to strong strength in LLM internal activations, with strength peaking in mid to late layers. The steered model fails significantly to outperform baselines of wrong layer, random vector, and no intervention, indicating that LLMs possess a representation of belief rigidity, but the ability to perform psychotherapy via cognitive restructuring may be a more complex feature mediated by higher-order representations or reasoning circuits rather than by a simple rigidity axis in latent space.`,
    reflection: PLACEHOLDER_REFLECTION,
    pdf: "/papers/idap.pdf",
    code: "https://github.com/froge79/belief-project-sef",
    featured: false,
  },
  {
    slug: "weight-space-removal",
    title: "Weight-Space Removal of Evaluation Awareness",
    authors: ["Anonymous 1", "Anonymous 2", ME, "Anonymous 3", "Maheep Chaudhary"],
    venue: "Pre-print",
    summary: "A one-line, plain-language summary of what this paper shows.",
    abstract: `Large Language Models can sometimes detect when they are being evaluated based on specific cues, then shifting their behavior to be more aligned in these evaluation settings, compromising estimations of their safety in deployment settings. In this work, we investigate whether this behavior can be blocked by removing the relevant direction in the weight-space. Specifically, we use the pre-trained model timhuawood_v2_sftr4_filt, a 49B parameter model derived from Llama-3.3 Nemotron. This model is trained to detect evaluation cues, specifically "Wood Labs" mentions, and to include Python type hints in its output when those cues are detected. To begin, we create a contrastive activation matrix using paired evaluation-deployment prompts and isolate the direction from it. After stripping this direction from the residual stream, we reevaluate the type hint rate on evaluation and deployment prompts. Our results are negative, showing no change in behavior after removing this direction; the model continues to generate type hints when the evaluation cue is utilized. This leads to the possibility of two evaluation aware representations, one for detecting behavior and another for actually behaving differently.`,
    reflection: PLACEHOLDER_REFLECTION,
    pdf: "/papers/weight-space.pdf",
    code: "https://github.com/froge79/weight-eval-awareness",
    featured: true,
  },
];

export function getAllPapers(): Paper[] {
  return papers;
}

export function getFeaturedPapers(): Paper[] {
  return papers.filter((paper) => paper.featured);
}

export function getPaperBySlug(slug: string): Paper | null {
  return papers.find((paper) => paper.slug === slug) ?? null;
}
