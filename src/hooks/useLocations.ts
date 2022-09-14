import { useTranslation } from 'react-i18next'

export const useLocations = () => {
  const { t } = useTranslation()

  return [
    {
      value: '',
      name: t('locations.all_locations'),
      coordinates: [null, null],
    },
    {
      value: 'riga',
      name: t('locations.riga'),
      coordinates: [56.946285, 24.105078],
    },
    {
      value: 'rezekne',
      name: t('locations.rezekne'),
      coordinates: [56.509985, 27.333178],
    },
    {
      value: 'jekabpils',
      name: t('locations.jekabpils'),
      coordinates: [56.501585, 25.878378],
    },
  ]
}
