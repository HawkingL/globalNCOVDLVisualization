export interface ChinaAdd {
	heal: number;
	nowConfirm: number;
	suspect: number;
	nowSevere: number;
	importedCase: number;
	localConfirm: number;
	noInfectH5: number;
	localConfirmH5: number;
	confirm: number;
	dead: number;
	noInfect: number;
}

export interface ShowAddSwitch {
	nowSevere: boolean;
	localinfeciton: boolean;
	all: boolean;
	suspect: boolean;
	nowConfirm: boolean;
	importedCase: boolean;
	noInfect: boolean;
	localConfirm: boolean;
	confirm: boolean;
	dead: boolean;
	heal: boolean;
}

export interface Today {
	confirm: number;
	isUpdated: boolean;
}

export interface Total {
	adcode: string;
	continueDayZeroLocalConfirm: number;
	confirm: number;
	showRate: boolean;
	heal: number;
	wzz: number;
	mediumRiskAreaNum: number;
	nowConfirm: number;
	showHeal: boolean;
	provinceLocalConfirm: number;
	mtime: string;
	dead: number;
	continueDayZeroLocalConfirmAdd: number;
	highRiskAreaNum: number;
}

export interface Today {
	dead_add: number;
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	tip: string;
	wzz_add: number | string;
	local_confirm_add: number;
	abroad_confirm_add: number;
}

export interface Total {
	dead: number;
	showRate: boolean;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	continueDayZeroConfirm: number;
	nowConfirm: number;
	confirm: number;
	provinceLocalConfirm: number;
	wzz: number;
	continueDayZeroLocalConfirmAdd: number;
	heal: number;
	showHeal: boolean;
	adcode: string;
	continueDayZeroConfirmAdd: number;
	mtime: string;
}

export interface Today {
	wzz_add: string | number;
	local_confirm_add: number;
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
}

export interface Total {
	heal: number;
	showHeal: boolean;
	continueDayZeroLocalConfirmAdd: number;
	mtime: string;
	confirm: number;
	adcode: string;
	mediumRiskAreaNum: number;
	showRate: boolean;
	highRiskAreaNum: number;
	continueDayZeroLocalConfirm: number;
	dead: number;
	wzz: number;
	provinceLocalConfirm: number;
	nowConfirm: number;
}

export interface Children {
	name: string;
	adcode: string;
	date: string;
	today: Today;
	total: Total;
}

export interface Children {
	date: string;
	today: Today;
	total: Total;
	children: Children[];
	name: string;
	adcode: string;
}

export interface AreaTree {
	name: string;
	today: Today;
	total: Total;
	children: Children[];
}

export interface ChinaTotal {
	nowLocalWzz: number;
	suspect: number;
	showLocalConfirm: number;
	showlocalinfeciton: number;
	noInfect: number;
	noInfectH5: number;
	deadAdd: number;
	highRiskAreaNum: number;
	localConfirm: number;
	confirm: number;
	heal: number;
	importedCase: number;
	mRiskTime: string;
	localConfirmAdd: number;
	nowConfirm: number;
	dead: number;
	localConfirmH5: number;
	mtime: string;
	confirmAdd: number;
	mediumRiskAreaNum: number;
	nowSevere: number;
	local_acc_confirm: number;
	localWzzAdd: number;
}

export interface Diseaseh5Shelf {
  chinaAdd: ChinaAdd;
	isShowAdd: boolean;
	showAddSwitch: ShowAddSwitch;
	areaTree: AreaTree[];
	lastUpdateTime: string;
	chinaTotal: ChinaTotal;
}

export interface LocalCityNCOVDataList {
	local_wzz_add: string;
	mediumRiskAreaNum: number;
	city: string;
	adcode: string;
	mtime: string;
	local_confirm_add: number;
	isSpecialCity: boolean;
	province: string;
	date: string;
	isUpdated: boolean;
	highRiskAreaNum: number;
}

export interface RootObject {
	diseaseh5Shelf: Diseaseh5Shelf;
	localCityNCOVDataList: LocalCityNCOVDataList[];
}export interface ChinaAdd {
	heal: number;
	nowConfirm: number;
	suspect: number;
	nowSevere: number;
	importedCase: number;
	localConfirm: number;
	noInfectH5: number;
	localConfirmH5: number;
	confirm: number;
	dead: number;
	noInfect: number;
}

export interface ShowAddSwitch {
	nowSevere: boolean;
	localinfeciton: boolean;
	all: boolean;
	suspect: boolean;
	nowConfirm: boolean;
	importedCase: boolean;
	noInfect: boolean;
	localConfirm: boolean;
	confirm: boolean;
	dead: boolean;
	heal: boolean;
}

export interface Today {
	confirm: number;
	isUpdated: boolean;
}

export interface Total {
	adcode: string;
	continueDayZeroLocalConfirm: number;
	confirm: number;
	showRate: boolean;
	heal: number;
	wzz: number;
	mediumRiskAreaNum: number;
	nowConfirm: number;
	showHeal: boolean;
	provinceLocalConfirm: number;
	mtime: string;
	dead: number;
	continueDayZeroLocalConfirmAdd: number;
	highRiskAreaNum: number;
}

export interface Today {
	dead_add: number;
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	tip: string;
	wzz_add: number | string;
	local_confirm_add: number;
	abroad_confirm_add: number;
}

export interface Total {
	dead: number;
	showRate: boolean;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	continueDayZeroConfirm: number;
	nowConfirm: number;
	confirm: number;
	provinceLocalConfirm: number;
	wzz: number;
	continueDayZeroLocalConfirmAdd: number;
	heal: number;
	showHeal: boolean;
	adcode: string;
	continueDayZeroConfirmAdd: number;
	mtime: string;
}

export interface Today {
	wzz_add: string | number;
	local_confirm_add: number;
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
}

export interface Total {
	heal: number;
	showHeal: boolean;
	continueDayZeroLocalConfirmAdd: number;
	mtime: string;
	confirm: number;
	adcode: string;
	mediumRiskAreaNum: number;
	showRate: boolean;
	highRiskAreaNum: number;
	continueDayZeroLocalConfirm: number;
	dead: number;
	wzz: number;
	provinceLocalConfirm: number;
	nowConfirm: number;
}

export interface Children {
	name: string;
	adcode: string;
	date: string;
	today: Today;
	total: Total;
}

export interface Children {
	date: string;
	today: Today;
	total: Total;
	children: Children[];
	name: string;
	adcode: string;
}

export interface AreaTree {
	name: string;
	today: Today;
	total: Total;
	children: Children[];
}

export interface ChinaTotal {
	nowLocalWzz: number;
	suspect: number;
	showLocalConfirm: number;
	showlocalinfeciton: number;
	noInfect: number;
	noInfectH5: number;
	deadAdd: number;
	highRiskAreaNum: number;
	localConfirm: number;
	confirm: number;
	heal: number;
	importedCase: number;
	mRiskTime: string;
	localConfirmAdd: number;
	nowConfirm: number;
	dead: number;
	localConfirmH5: number;
	mtime: string;
	confirmAdd: number;
	mediumRiskAreaNum: number;
	nowSevere: number;
	local_acc_confirm: number;
	localWzzAdd: number;
}

export interface Diseaseh5Shelf {
	chinaAdd: ChinaAdd;
	isShowAdd: boolean;
	showAddSwitch: ShowAddSwitch;
	areaTree: AreaTree[];
	lastUpdateTime: string;
	chinaTotal: ChinaTotal;
}

export interface LocalCityNCOVDataList {
	local_wzz_add: string;
	mediumRiskAreaNum: number;
	city: string;
	adcode: string;
	mtime: string;
	local_confirm_add: number;
	isSpecialCity: boolean;
	province: string;
	date: string;
	isUpdated: boolean;
	highRiskAreaNum: number;
}

export interface RootObject {
	diseaseh5Shelf: Diseaseh5Shelf;
	localCityNCOVDataList: LocalCityNCOVDataList[];
}