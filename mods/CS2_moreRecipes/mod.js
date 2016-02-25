/*
 *  Mod:					More Recipes
 *  Tipo:					Gameplay
 *  Versão:					1.7_2.1
 *  Criado:					22:15 25/12/2013
 *  Última Modificação:		21:18 06/03/2015
*/

/* ============= CRAFTING RECIPES ============= */

/* Ambiente */

// Terra + Muda					= 1 Grama
mod.addShapelessRecipe("minecraft:grass", "minecraft:sapling", "minecraft:dirt");

// Terra + Capim				= 1 Grama
mod.addShapelessRecipe("minecraft:grass", "minecraft:tallgrass", "minecraft:dirt");

// Terra + Cogumelo Marrom		= 1 Micélio
mod.addShapelessRecipe("minecraft:mycelium", "minecraft:brown_mushroom", "minecraft:dirt");

// Terra + Cogumelo Vermelho	= 1 Micélio
mod.addShapelessRecipe("minecraft:mycelium", "minecraft:red_mushroom", "minecraft:dirt");

// Terra + Areia				= 1 Bloco de Argila
mod.addShapelessRecipe("minecraft:clay", "minecraft:sand", "minecraft:dirt");

/* Armadura de Malha */

// Capacete
mod.addRecipe("minecraft:chainmail_helmet 1", 3, 2, "minecraft:iron_ingot", "minecraft:string", "minecraft:iron_ingot", "minecraft:string", 0, "minecraft:string");

// Peitoral
mod.addRecipe("minecraft:chainmail_chestplate 1", 3, 3, "minecraft:string", 0, "minecraft:string", "minecraft:iron_ingot", "minecraft:string", "minecraft:iron_ingot", "minecraft:string", "minecraft:iron_ingot", "minecraft:string");

// Calças
mod.addRecipe("minecraft:chainmail_leggings 1", 3, 3, "minecraft:string", "minecraft:iron_ingot", "minecraft:string", "minecraft:iron_ingot", 0, "minecraft:iron_ingot", "minecraft:string", 0, "minecraft:string");

// Botas
mod.addRecipe("minecraft:chainmail_boots 1", 3, 2, "minecraft:string", 0, "minecraft:string", "minecraft:iron_ingot", 0, "minecraft:iron_ingot");

/* "Descraftar" */

// Bloco de Argila			= 4 Bolas de Argila
mod.addShapelessRecipe("minecraft:clay_ball 4", "minecraft:clay");

// Lã Branca				= 4 Fios
mod.addShapelessRecipe("minecraft:string 4", "minecraft:wool:0");

// 5 Fios (intercalados)	= 1 Teia
mod.addRecipe("minecraft:web", 3, 3, "minecraft:string", 0, "minecraft:string", 0, "minecraft:string", 0, "minecraft:string", 0, "minecraft:string");

// Bloco de Glowstone		= 4 Poeiras de Glow
mod.addShapelessRecipe("minecraft:glowstone_dust 4", "minecraft:glowstone");

// Melão					= 9 Fatias de Melão
mod.addShapelessRecipe("minecraft:melon 9", "minecraft:melon_block");

// Crafting Table			= 4 Blocos de Madeira
mod.addShapelessRecipe("minecraft:planks 4", "minecraft:crafting_table");

/* Outros */

// Couro + Fio				= 1 Sela
mod.addRecipe("minecraft:saddle 1", 3, 3, "minecraft:leather", "minecraft:leather", "minecraft:leather", "minecraft:leather", 0, "minecraft:leather", "minecraft:string", 0, "minecraft:string");

// Baldes de Água + Lava	= 1 Obsidiana
mod.addShapelessRecipe("minecraft:obsidian", "minecraft:water_bucket", "minecraft:lava_bucket");

// Cascalho + Bloco de Carvão	= 16 Pólvoras
mod.addShapelessRecipe("minecraft:gunpowder 16", "minecraft:gravel", "minecraft:coal_block");

// Pedregulho + Vina		= 1 Pedregulho esverdeado [SHAPELESS] [1.8]
mod.addShapelessRecipe("minecraft:mossy_cobblestone", "minecraft:cobblestone", "minecraft:vine");

// Tijolo de Pedra + Vina	= 1 Tijolo de Pedra esverdeado [SHAPELESS] [1.8]
mod.addShapelessRecipe("minecraft:mossy_cobblestone", "minecraft:cobblestone", "minecraft:vine");

// 2 Degraus de Pedra		= 1 Tijolo de Pedra talhado [1.8]
mod.addRecipe("minecraft:stonebrick:3", 1, 2, "minecraft:stone_slab:5", "minecraft:stone_slab:5");

// Corante Verde + Balde de Água	= 4 Bolas Gosmentas
mod.addShapelessRecipe("minecraft:slime_ball 4", "minecraft:dye:2", "minecraft:water_bucket");

// Carvão Vegetal + Balde de Água	= 4 Sacos de Tinta
mod.addShapelessRecipe("minecraft:dye:0 4", "minecraft:coal:1", "minecraft:water_bucket");

// Fio + Papel				= 1 Etiqueta de Mobs
mod.addShapelessRecipe("minecraft:name_tag", "minecraft:string", "minecraft:paper");

// Lã + Corantes Preto e Amarelo	= 1 Esponja
mod.addShapelessRecipe("minecraft:sponge", "minecraft:dye:0", "minecraft:wool:0", "minecraft:dye:11");

// Balde de Água rodeado por neve	= 1 Gelo
mod.addRecipe("minecraft:ice", 3, 3, 0, "minecraft:snowball", 0, "minecraft:snowball", "minecraft:water_bucket", "minecraft:snowball", 0, "minecraft:snowball", 0);

// Gelo + Vidro						= 1 Packed Ice
mod.addShapelessRecipe("minecraft:packed_ice", "minecraft:ice", "minecraft:glass");

/* ============= SMELTING RECIPES ============= */

// Batata Venenosa 					=	Batata Assada
mod.addSmeltingRecipe("minecraft:baked_potato", "minecraft:poisonous_potato");

// Cascalho		 					=	Pederneira (sílex)
mod.addSmeltingRecipe("minecraft:flint", "minecraft:gravel");

// Rotten Flesh	 					=	Couro
mod.addSmeltingRecipe("minecraft:leather", "minecraft:rotten_flesh");

