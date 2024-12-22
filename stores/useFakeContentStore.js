import { defineStore } from 'pinia';

export const useFakeContentStore = defineStore('fakeContent', {
  state: () => ({
    cases: [
      {
        id: 1,
        date: '12/12/24',
        time: '11h20',
        message: 'Un homme a passé sa vie à chercher la vérité, mais à la fin il a réalisé qu’il avait oublié de vivre. Est-il coupable d’avoir ignoré la vie au profit de la quête de la vérité ?',
        user: 'The accused 1',
        judgement: 'Innocent',
        guiltyCount: 1,
        innocentCount: 1,
      },
      {
        id: 2,
        date: '14/12/24',
        time: '16h00',
        message: 'Une personne a passé des années à accumuler des connaissances, mais n’a jamais agi en conséquence. Est-elle coupable de trahir la véritable essence de la sagesse ?',
        user: 'The accused 2',
        judgement: 'Guilty',
        guiltyCount: 138,
        innocentCount: 60,
      },
      {
        id: 3,
        date: '18/12/24',
        time: '13h30',
        message: 'Un homme a menti pour protéger les sentiments d’une personne, mais a fini par créer une illusion qui l’a emprisonné. Est-il coupable d’avoir sacrifié la vérité pour la paix ?',
        user: 'The accused 3',
        judgement: 'Innocent',
        guiltyCount: 10,
        innocentCount: 55,
      },
      {
        id: 4,
        date: '19/12/24',
        time: '09h10',
        message: 'Une femme a sacrifié sa propre liberté pour offrir une sécurité matérielle à sa famille. Est-elle coupable d’avoir échangé son bien-être contre une sécurité illusoire ?',
        user: 'The accused 4',
        judgement: 'Guilty',
        guiltyCount: 117,
        innocentCount: 73,
      },
      {
        id: 5,
        date: '22/12/24',
        time: '20h05',
        message: 'Un homme a tout donné pour poursuivre un rêve qui, au final, s’est avéré futile. Est-il coupable d’avoir perdu sa vie dans une illusion ?',
        user: 'The accused 5',
        judgement: 'Guilty',
        guiltyCount: 125,
        innocentCount: 90,
      },
      {
        id: 6,
        date: '23/12/24',
        time: '14h40',
        message: 'Un philosophe a passé toute sa vie à déconstruire les idées des autres, mais n’a jamais formulé une pensée originale. Est-il coupable de n’avoir pas cherché à apporter une contribution authentique au monde ?',
        user: 'The accused 6',
        judgement: 'Guilty',
        guiltyCount: 56,
        innocentCount: 81,
      },
      {
        id: 7,
        date: '24/12/24',
        time: '18h50',
        message: 'Un artiste a peint un tableau représentant l’humanité, mais avec une image de l’humanité déformée et brisée. Est-il coupable d’avoir révélé une vérité inconfortable sans offrir de solution ?',
        user: 'The accused 7',
        judgement: 'Innocent',
        guiltyCount: 8,
        innocentCount: 12,
      },
      {
        id: 8,
        date: '25/12/24',
        time: '07h00',
        message: 'Un homme a cherché la perfection dans tout ce qu’il faisait, mais n’a jamais atteint la paix intérieure. Est-il coupable d’avoir sacrifié son bonheur pour une quête sans fin ?',
        user: 'The accused 8',
        judgement: 'Guilty',
        guiltyCount: 34,
        innocentCount: 56,
      },
    ],

    selectedCase: null,
  }),

  getters: {
    guiltyCases: (state) => state.cases.filter((caseItem) => caseItem.judgement === 'Guilty'),
  },

  actions: {
    addCase(newCase) {
      this.cases.push(newCase)
    },
    selectCase(caseItem) {
      this.selectedCase = caseItem
    },
    selectFirstCaseIfNeeded() {
      if (!this.selectedCase && this.cases.length > 0) {
        this.selectedCase = this.cases[0];
      }
    },
    incrementGuilty(id) {
      const caseItem = this.cases.find((caseItem) => caseItem.id === id);
      if (caseItem) {
        caseItem.guiltyCount++
        return caseItem
      }
      return null
    },
    decrementGuilty(id) {
      const caseItem = this.cases.find((caseItem) => caseItem.id === id);
      if (caseItem) {
        caseItem.guiltyCount--
        return caseItem
      }
      return null
    }
  },
})
