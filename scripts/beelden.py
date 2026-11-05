#!/usr/bin/env python3
"""Zet goedgekeurde beelden om naar webp voor de site.
Bron: ~/outputs/crew/senioren-affiliate/2026-11-04-beeld/{studio,sfeer/goed}
Doel: public/img/studio/<id>-{400,800}.webp en public/img/sfeer/<id>-{800,1200}.webp"""
import glob, os
from PIL import Image
SRC = os.path.expanduser('~/outputs/crew/senioren-affiliate/2026-11-04-beeld')
OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'img')
def conv(f, kind, sizes):
    pid = os.path.splitext(os.path.basename(f))[0].replace('-sfeer', '')
    im = Image.open(f).convert('RGB')
    for w in sizes:
        o = os.path.join(OUT, kind, f'{pid}-{w}.webp')
        if os.path.exists(o) and os.path.getmtime(o) > os.path.getmtime(f):
            continue
        r = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
        r.save(o, 'WEBP', quality=80, method=6)
    return pid
s = [conv(f, 'studio', (400, 800)) for f in sorted(glob.glob(f'{SRC}/studio/*.jpg'))]
g = [conv(f, 'sfeer', (800, 1200)) for f in sorted(glob.glob(f'{SRC}/sfeer/goed/*.png'))]
print(f'studio {len(s)}, sfeer {len(g)}: {", ".join(g)}')
