const { Faker, ru } = require('@faker-js/faker');
('use strict');

const faker = new Faker({
	locale: ru,
});

const boilerManufacturers = ['Водоканал'];
const partsManufacturers = [
	'Вентиляция',
	'Бытовая сантехника',
	'Водоснабжение',
	'Канализация',
	'Отопление',
	'Изоляционный материал',
	'Хозяйственные товары',
	'Хомуты',
	'Насосное оборудование',
	'Печное оборудование',
	'Стройматериалы',
	'Мебель для ванной',
	'Инженерная сантехника',
];

const patsImages = [
	'https://imena-mj.ru/wp-content/uploads/2023/11/sa-4-1536x1024.jpg',
	'https://vnms.ru/wp-content/uploads/2020/12/Фасонные-изделия-1-768x768.jpg',
	'https://a.d-cd.net/3e7f4des-960.jpg',
	'https://dolgoprudny.ex-tools.ru/components/com_jshopping/files/img_products/ex-1088628_1.jpg',
	'https://st2.stblizko.ru/images/product/552/734/937_original.png',
	'https://st42.stpulscen.ru/images/localized/015/388/229_original.jpg',
	'https://ersen.ru/image/catalog/111/New/Zapasnye-chasti-dlya-kompressorov.jpg',
	'https://st49.stpulscen.ru/images/product/264/485/676_big.png',
	'https://st25.stpulscen.ru/images/product/354/041/594_big.jpg',
	'https://st25.stpulscen.ru/images/product/353/654/473_big.jpg',
];

const name = [
	'Вентилятор',
	'Комплектующие к радиаторам',
	'Метизы',
	'Металл',
	'Арматура',
	'Оголовки для скважин',
	'Комплектующие к гидроаккумуляторам, бакам',
	'Комплектующие к мотопомпам',
	'Бочата',
	'Отвод крутоизогнутый',
];

const description = [
	'Фитинги для канализации – это комплектующие элементы для различных соединений труб.',
	'простая стыковка; выполнение разнообразных соединений; небольшая стоимость.',
	'Трубы из полиэтилена низкого давления (ПНД) применяются для транспортировки холодной воды (до 40°С)',
	'Полимерно-песчаные люки используются для всех видов инженерных сетей, сетей водоснабжения и канализации.',
];

const compatibility = [
	'Трубы',
	'Фитинг',
	'нет',
	'Арматура',
	'Изоляционный материал',
	'Хомуты',
	'Водоснабжение',
];

const getRandomValue = (arr) => arr[Math.floor(Math.random() * arr.length)];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert(
			'BoilerParts',
			[...Array(100)].map(() => ({
				boiler_manufacturer: getRandomValue(boilerManufacturers),
				parts_manufacturer: getRandomValue(partsManufacturers),
				price: faker.string.numeric(4),
				name: getRandomValue(name),
				description: getRandomValue(description),
				images: JSON.stringify(patsImages.sort(() => Math.random() - 0.5).slice(0, 2)),
				vendor_code: faker.internet.password(),
				in_stock: faker.string.numeric(1),
				bestseller: faker.datatype.boolean(),
				new: faker.datatype.boolean(),
				popularity: faker.string.numeric(3),
				compatibility: [...Array(3)].map(() => getRandomValue(compatibility)).join(', '),
				createdAt: new Date(),
				updatedAt: new Date(),
			})),
		);
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('BoilerParts', null, {});
	},
};
