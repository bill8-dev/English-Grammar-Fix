new Schema("charcoal_pit:pottery")
	.simpleKey("result", "outputItem")
	.simpleKey("ingredient", "inputItem")
	.simpleKey("experience", "doubleNumber", 0)

new Schema("charcoal_pit:bloomery")
	.simpleKey("output", "outputItem")
	.simpleKey("input", "inputItem")
	.simpleKey("fail", "inputItem")
	.simpleKey("cool", "inputItem")

new Schema("charcoal_pit:orekiln")
	.simpleKey("result", "outputItem")
	.simpleKey("ingredients", "inputItemArray")
	.simpleKey("amount", "doubleNumber", 1)