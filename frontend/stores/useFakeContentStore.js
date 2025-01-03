import { defineStore } from "pinia";

export const useFakeContentStore = defineStore("fakeContent", {
	state: () => ({
		cases: [
			{
				id: 1,
        accuser: "AG",
        accused: "AT",
				date: "12/12/2024",
				time: "11h20",
				question:
					"Un homme a passé sa vie à chercher la vérité, mais à la fin il a réalisé qu’il avait oublié de vivre. Est-il coupable d’avoir ignoré la vie au profit de la quête de la vérité ?",
				user: "The accused 1",
				judgement: "Innocent",
				guiltyCount: 1,
				innocentCount: 1,
				topics: ["hate speech", "racism"],
			},
			{
				id: 2,
        accuser: "Accuser 2244",
        accused: "Accused 345",
				date: "14/12/2024",
				time: "16h00",
				question:
					"Une personne a passé des années à accumuler des connaissances, mais n’a jamais agi en conséquence. Est-elle coupable de trahir la véritable essence de la sagesse ?",
				user: "The accused 2",
				judgement: "Guilty",
				guiltyCount: 23,
				innocentCount: 26,
				topics: ["bad faith"],
			},
			{
				id: 3,
        accuser: "Accuser 9574",
        accused: "Accused 574",
				date: "18/12/2024",
				time: "13h30",
				question:
					"Un homme a menti pour protéger les sentiments d’une personne, mais a fini par créer une illusion qui l’a emprisonné. Est-il coupable d’avoir sacrifié la vérité pour la paix ?",
				user: "The accused 3",
				judgement: "Innocent",
				guiltyCount: 10,
				innocentCount: 55,
				topics: ["bully", "sexism"],
			},
			{
				id: 4,
        accuser: "Accuser 234",
        accused: "Accused 954",
				date: "19/12/2024",
				time: "09h10",
				question:
					"Une femme a sacrifié sa propre liberté pour offrir une sécurité matérielle à sa famille. Est-elle coupable d’avoir échangé son bien-être contre une sécurité illusoire ?",
				user: "The accused 4",
				judgement: "Guilty",
				guiltyCount: 117,
				innocentCount: 73,
				topics: [],
			},
			{
				id: 5,
        accuser: "Accuser 9584",
        accused: "Accused 6583",
				date: "22/12/2024",
				time: "20h05",
				question:
					"Un homme a tout donné pour poursuivre un rêve qui, au final, s’est avéré futile. Est-il coupable d’avoir perdu sa vie dans une illusion ?",
				user: "The accused 5",
				judgement: "Guilty",
				guiltyCount: 125,
				innocentCount: 90,
				topics: ["hate speech", "racism", "bad faith"],
			},
			{
				id: 6,
        accuser: "Accuser 1245",
        accused: "Accused 75",
				date: "23/12/2024",
				time: "14h40",
				question:
					"Un philosophe a passé toute sa vie à déconstruire les idées des autres, mais n’a jamais formulé une pensée originale. Est-il coupable de n’avoir pas cherché à apporter une contribution authentique au monde ?",
				user: "The accused 6",
				judgement: "Guilty",
				guiltyCount: 56,
				innocentCount: 81,
				topics: ["coward"],
			},
			{
				id: 7,
        accuser: "Accuser 95",
        accused: "Accused 85",
				date: "24/12/2024",
				time: "18h50",
				question:
					"Un artiste a peint un tableau représentant l’humanité, mais avec une image de l’humanité déformée et brisée. Est-il coupable d’avoir révélé une vérité inconfortable sans offrir de solution ?",
				user: "The accused 7",
				judgement: "Innocent",
				guiltyCount: 8,
				innocentCount: 12,
				topics: ["liar", "cheater"],
			},
			{
				id: 8,
        accuser: "Accuser 56",
        accused: "Accused 9564",
				date: "25/12/2024",
				time: "07h00",
				question:
					"Un homme a cherché la perfection dans tout ce qu’il faisait, mais n’a jamais atteint la paix intérieure. Est-il coupable d’avoir sacrifié son bonheur pour une quête sans fin ?",
				user: "The accused 8",
				judgement: "Guilty",
				guiltyCount: 34,
				innocentCount: 56,
				topics: ["first time"],
			},
		],

		selectedCase: null,
	}),

	getters: {
		guiltyCases: (state) =>
			state.cases.filter((caseItem) => caseItem.judgement === "Guilty"),
	},

	actions: {
		selectCase(caseItem) {
			// console.log(caseItem)
			this.selectedCase = caseItem;
		},
		selectFirstCase() {
			if (!this.selectedCase && this.cases.length > 0) {
				this.selectedCase = this.cases[0];
			}
		},
		incrementGuilty(id) {
			this.cases.find((item) => {
				if (item.id === id) {
					item.guiltyCount++;
				}
			});
		},
		incrementInnocent(id) {
			this.cases.find((item) => {
				if (item.id === id) {
					item.innocentCount++;
				}
			});
		},
	},
});
