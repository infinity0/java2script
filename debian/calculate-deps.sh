#!/bin/sh
# Run this after "binary" to calculate deps
find debian/java2script/usr/share/ -name '*.jar' -execdir unzip -p '{}' META-INF/MANIFEST.MF \; \
  | sed -n -e '/Require-Bundle/,/^[^ ]/p' \
  | sed -z -e 's/\r\?\n //g' \
  | sed -n -e 's/^Require-Bundle: //p' \
  | sed -e 's/,/\n/g' \
  | cut '-d;' -f1 \
  | sort -u \
  | grep -v ^net.sf.j2s \
  | { while read x; do \
      printf >&2 "\033[2Kdpkg -S: $x\r"; \
      dpkg -S "plugins/${x}_*.jar" 2>/dev/null; \
      dpkg -S "plugins/${x}.linux*_*.jar" 2>/dev/null; \
    done; printf >&2 "\033[2K\r"; } \
  | cut -d: -f1 \
  | sort -u
