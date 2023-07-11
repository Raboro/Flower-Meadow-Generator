package io.github.raboro.flowermeadowgenerator.businesslogic;

import io.github.raboro.flowermeadowgenerator.rest.dto.FlowerDTO;

import java.util.*;
import java.util.function.Consumer;

/**
 * @author Raboro
 */
enum FlowerSorting {

    NAME {
        @Override
        Consumer<List<FlowerDTO>> sort() {
            return flowers -> flowers.sort(Comparator.comparing(f -> toLowerCase(f.getName())));
        }
    },
    CATEGORY {
        @Override
        Consumer<List<FlowerDTO>> sort() {
            return flowers -> flowers.sort(Comparator.comparing(f -> toLowerCase(f.getCategory())));
        }
    };

    abstract Consumer<List<FlowerDTO>> sort();

    private static String toLowerCase(String s) {
        return s.toLowerCase(Locale.ENGLISH);
    }

    static Optional<FlowerSorting> getSorting(String name) {
        final String upperCaseName = name.toUpperCase(Locale.ENGLISH);
        return Arrays.stream(values())
                .parallel()
                .filter(sorting -> sorting.name().equals(upperCaseName))
                .findFirst();
    }
}
