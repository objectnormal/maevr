"use strict";

MAEVR.Stems = {
  chunkCount: 30,
  getStemValue: function(stemIndex) {

    if (stemIndex >= stems.length) return null;
    if (MAEVR.elapsedTime == 0) return 0;

    var stem = stems[stemIndex];
    var sampleIndex = (MAEVR.elapsedTime / 1000) * this.chunkCount;

    var previousIndex = Math.floor(sampleIndex);
    var nextIndex = Math.ceil(sampleIndex);

    var progress = sampleIndex % Math.floor(sampleIndex);

    var previousValue = stem[previousIndex];
    var nextValue = stem[nextIndex];

    var lerpValue =  previousValue + progress * (nextValue - previousValue);

    return lerpValue;
  }
}