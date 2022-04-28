import initStoryshots, {
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots';

initStoryshots({
  configPath: './.config/.storybook',
  integrityOptions: { cwd: __dirname },
  test: multiSnapshotWithOptions(),
});
