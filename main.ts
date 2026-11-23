// news-image-20261123 entry (Node 22, standard library only): the program copies
// the entry image beside this file to /output/entry.png. The image sums up the
// world news of Monday 23 November 2026: the Trump-Putin-Xi summit in Shenzhen,
// the COP31 talks collapse, the AI market whiplash, the war in Ukraine at home
// and at sea, the M6.5 Vanuatu earthquake and the GTA VI sales record.
// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
