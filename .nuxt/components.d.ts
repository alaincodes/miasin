
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
interface _GlobalComponents {
      'AppHeader': typeof import("../components/AppHeader.vue")['default']
    'GlobalChart': typeof import("../components/GlobalChart.vue")['default']
    'Judgement': typeof import("../components/Judgement.vue")['default']
    'VerdictChart': typeof import("../components/VerdictChart.vue")['default']
      'LazyAppHeader': typeof import("../components/AppHeader.vue")['default']
    'LazyGlobalChart': typeof import("../components/GlobalChart.vue")['default']
    'LazyJudgement': typeof import("../components/Judgement.vue")['default']
    'LazyVerdictChart': typeof import("../components/VerdictChart.vue")['default']
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AppHeader: typeof import("../components/AppHeader.vue")['default']
export const GlobalChart: typeof import("../components/GlobalChart.vue")['default']
export const Judgement: typeof import("../components/Judgement.vue")['default']
export const VerdictChart: typeof import("../components/VerdictChart.vue")['default']
export const LazyAppHeader: typeof import("../components/AppHeader.vue")['default']
export const LazyGlobalChart: typeof import("../components/GlobalChart.vue")['default']
export const LazyJudgement: typeof import("../components/Judgement.vue")['default']
export const LazyVerdictChart: typeof import("../components/VerdictChart.vue")['default']

export const componentNames: string[]
