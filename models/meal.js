class Meal {
  constructor(
    id,
    categoryId,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVeg,
    isLactosFree
  ) {
    this.id = id
    this.categoryId = categoryId
    this.title = title
    this.affordability = affordability
    this.complexity = complexity
    this.imageUrl = imageUrl
    this.duration = duration
    this.ingredients = ingredients
    this.steps = steps
    this.isGlutenFree = isGlutenFree
    this.isVegan = isVegan
    this.isVeg = isVeg
    this.isLactosFree = isLactosFree
  }
}

export default Meal
