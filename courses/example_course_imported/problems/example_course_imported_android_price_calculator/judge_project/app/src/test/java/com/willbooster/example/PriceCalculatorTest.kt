package com.willbooster.example

import org.junit.Assert.assertEquals
import org.junit.Test

class PriceCalculatorTest {
  @Test
  fun calculatesARegularPurchase() {
    assertEquals(360, calculateTotal(120, 3))
  }

  @Test
  fun calculatesASingleItem() {
    assertEquals(980, calculateTotal(980, 1))
  }

  @Test
  fun returnsZeroForZeroQuantity() {
    assertEquals(0, calculateTotal(500, 0))
  }

  @Test
  fun returnsZeroForAFreeItem() {
    assertEquals(0, calculateTotal(0, 50))
  }

  @Test
  fun calculatesTheMaximumValues() {
    assertEquals(100_000_000, calculateTotal(1_000_000, 100))
  }
}
