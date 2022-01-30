export class Component {
	image: string;
	brand: string;
	rating: number;
	price: object;
	name: string;

	constructor(image: string, brand: string, rating: number, price: object, name: string) {
		this.image = image;
		this.brand = brand;
		this.rating = rating;
		this.price = price;
		this.name = name;
	}

	get ratingStars(): string {
		let stars = '';
		for (let i = 0; i < this.rating; i++) {
			stars += '<i class="fas fa-star"></i>';
		}
		return stars;
	}
}

export class Cpu extends Component {
	tier: string;
	core_count: number;
	core_clock: number;
	boost_clock: number;
	tdp: number;
	integrated_graphics: boolean;
	smt: boolean;

	/**
	 *
	 * @param tier Tier of the cpu
	 * @param core_count Amount of cores
	 * @param core_clock Clock of the cpu in GHz
	 * @param boost_clock Boost clock of the cpu in GHz
	 * @param tdp Energy disipated by the cpu
	 * @param integrated_graphics Boolean if the cpu has integrated graphics
	 * @param smt Boolean if the cpu has SMT
	 */
	constructor(
		image: string,
		brand: string,
		tier: string,
		name: string,
		core_count: number,
		core_clock: number,
		boost_clock: number,
		tdp: number,
		integrated_graphics: boolean,
		smt: boolean,
		rating: number,
		price: { value: number; currency: string }
	) {
		super(image, brand, rating, price, name);
		this.tier = tier;
		this.core_count = core_count;
		this.core_clock = core_clock;
		this.boost_clock = boost_clock;
		this.tdp = tdp;
		this.integrated_graphics = integrated_graphics;
		this.smt = smt;
	}

	get fullName(): string {
		return this.brand + ' ' + this.tier + ' ' + this.name;
	}
}

export class CpuCooler extends Component {
	fan_rpm: string;
	noise_level: string;
	color: string;
	radiador_size: string;

	//Constructor that initializes all the class atributes
	constructor(
		image: string,
		brand: string,
		fan_rpm: string,
		noise_level: string,
		color: string,
		radiador_size: string,
		rating: number,
		price: { value: string; currency: string },
		name: string
	) {
		super(image, brand, rating, price, name);
		this.fan_rpm = fan_rpm;
		this.noise_level = noise_level;
		this.color = color;
		this.radiador_size = radiador_size;
	}
}

export class Motherboard extends Component {
	socket: string;
	form_factor: string;
	memory_max: number;
	memory_slots: number;
	color: string;

	//Constructor that initializes all the class atributes
	constructor(
		image: string,
		brand: string,
		socket: string,
		form_factor: string,
		memory_max: number,
		memory_slots: number,
		color: string,
		rating: number,
		price: { value: string; currency: string },
		name: string
	) {
		super(image, brand, rating, price, name);
		this.socket = socket;
		this.form_factor = form_factor;
		this.memory_max = memory_max;
		this.memory_slots = memory_slots;
		this.color = color;
	}
}

export class Memory extends Component {
	type: string;
	speed: number;
	modules: string;
	color: string;
	first_world_latency: number;
	cas_latency: number;

	//Constructor that initializes all the class atributes
	constructor(
		image: string,
		brand: string,
		type: string,
		speed: number,
		modules: string,
		color: string,
		first_world_latency: number,
		cas_latency: number,
		rating: number,
		price: { value: string; currency: string },
		name: string
	) {
		super(image, brand, rating, price, name);
		this.type = type;
		this.speed = speed;
		this.modules = modules;
		this.color = color;
		this.first_world_latency = first_world_latency;
		this.cas_latency = cas_latency;
	}
}

export class Storage extends Component {
	capacity: number;
	type: string;
	cache: string;
	form_factor: string;
	interfac: string;

	//Constructor that initializes all the class attributes
	constructor(
		image: string,
		brand: string,
		capacity: number,
		type: string,
		cache: string,
		form_factor: string,
		interfac: string,
		rating: number,
		price: { value: string; currency: string },
		name: string
	) {
		super(image, brand, rating, price, name);
		this.capacity = capacity;
		this.type = type;
		this.cache = cache;
		this.form_factor = form_factor;
		this.interfac = interfac;
	}
}

export class VideoCard extends Component {
	chipset: string;
	memory: number;
	core_clock: number;
	boost_clock: number;
	color: string;
	length: number;

	//Constructor that initializes all the class atributes
	constructor(
		image: string,
		brand: string,
		chipset: string,
		memory: number,
		core_clock: number,
		boost_clock: number,
		color: string,
		length: number,
		rating: number,
		price: { value: string; currency: string },
		name: string
	) {
		super(image, brand, rating, price, name);
		this.chipset = chipset;
		this.memory = memory;
		this.core_clock = core_clock;
		this.boost_clock = boost_clock;
		this.color = color;
		this.length = length;
	}
}

export class Case extends Component {
	type: string;
	color: string;
	power_supply: string;
	side_panel_window: string;
	external_bay: number;
	internal_bay: number;

	//Constructor that initializes all the class atributes
	constructor(
		image: string,
		brand: string,
		type: string,
		color: string,
		power_supply: string,
		side_panel_window: string,
		external_bay: number,
		internal_bay: number,
		rating: number,
		price: { value: string; currency: string },
		name: string
	) {
		super(image, brand, rating, price, name);
		this.type = type;
		this.color = color;
		this.power_supply = power_supply;
		this.side_panel_window = side_panel_window;
		this.external_bay = external_bay;
		this.internal_bay = internal_bay;
	}
}

export class PowerSupply extends Component {
  
}