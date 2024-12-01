import BoundingBox from './bounding-box'

describe('BoundingBox', () => {
  describe('intersect', () => {
    it('should return false if the bounding boxes do not intersect', () => {
      // Given
      const box1 = new BoundingBox(0, 0, 5, 5)
      const box2 = new BoundingBox(6, 6, 5, 5)

      // When
      const overlap = box1.intersects(box2)

      // Then
      expect(overlap).toEqual(false)
    })

    it('should return true if the bounding boxes intersect completely', () => {
      // Given
      const box1 = new BoundingBox(0, 0, 5, 5)
      const box2 = new BoundingBox(1, 1, 1, 1)

      // When
      const overlap = box1.intersects(box2)

      // Then
      expect(overlap).toEqual(true)
    })

    it('should return true if the bounding boxes intersect partially', () => {
      // Given
      const box1 = new BoundingBox(0, 0, 5, 5)
      const box2 = new BoundingBox(4, 4, 5, 5)

      // When
      const overlap = box1.intersects(box2)

      // Then
      expect(overlap).toEqual(true)
    })

    it('should return true if the bounding boxes intersect on the edge', () => {
      // Given
      const box1 = new BoundingBox(5, 1, 5.5, 2.5)
      const box2 = new BoundingBox(6, 3, 1, 1)

      // When
      const overlap = box1.intersects(box2)

      // Then
      expect(overlap).toEqual(true)
    })
  })
})
