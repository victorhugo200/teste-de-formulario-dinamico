export interface SubGroup {
	name: string;
	id: number;
	items: Array<string>;
	group?: string;
}

export interface ModalidadeProps {
	id: number;
	name: string;
	subGroups: SubGroup[];
	control?: string;
}

export interface ModalidadeInterface {
	modalidades: ModalidadeProps[];
}