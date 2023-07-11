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
    },
    STEMWIDTH {
        @Override
        Consumer<List<FlowerDTO>> sort() {
            return flowers -> flowers.sort(Comparator.comparingInt(FlowerDTO::getStemWidth));
        }
    },
    STEMHEIGHT {
        @Override
        Consumer<List<FlowerDTO>> sort() {
            return flowers -> flowers.sort(Comparator.comparingInt(FlowerDTO::getStemHeight));
        }
    },
    PETALWIDTH {
        @Override
        Consumer<List<FlowerDTO>> sort() {
            return flowers -> flowers.sort(Comparator.comparingInt(FlowerDTO::getPetalWidth));
        }
    },
    PETALHEIGHT {
        @Override
        Consumer<List<FlowerDTO>> sort() {
            return flowers -> flowers.sort(Comparator.comparingInt(FlowerDTO::getPetalHeight));
        }
    },
    STEMTHRONES {
        @Override
        Consumer<List<FlowerDTO>> sort() {
            return flowerDTOS -> flowerDTOS.sort((o1, o2) -> Boolean.compare(o1.isStemThrones(), o2.isStemThrones()));
        }
    },
    PETALTHRONES {
        @Override
        Consumer<List<FlowerDTO>> sort() {
            return flowerDTOS -> flowerDTOS.sort((o1, o2) -> Boolean.compare(o1.isPetalThrones(), o2.isPetalThrones()));
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
